import { Octokit } from "@octokit/core";
import { createPullRequest } from "octokit-plugin-create-pull-request";
import slugify from "slugify";
import fs from 'fs';
import { execSync } from 'child_process';

const MyOctokit = Octokit.plugin(createPullRequest);

const octokit = new MyOctokit({
  auth: process.env.GITHUB_TOKEN,
});

function extractUrl(body) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const urls = body.match(urlPattern);
  return urls ? urls[0] : null;
}

function createFilename(title) {
  const today = new Date().toISOString().split('T')[0];
  const slug = slugify(title, { lower: true, strict: true });
  return `${today}-${slug}.md`;
}

function parseArticle(url) {
  try {
    const result = JSON.parse(execSync(`postlight-parser "${url}" --format=markdown`, { encoding: 'utf8' }));

    const title = result.title || "";
    const author = result.author || null;
    const date = result.date_published
      ? new Date(result.date_published).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0];
    const content = result.content || "";

    const frontMatter = `---
layout: post
title: "${title}"
author: ${author}
date: ${date}
canonical_url: ${url}
---

`;

    const fullContent = frontMatter + content;

    return { content: fullContent, title };
  } catch (error) {
    console.error("Failed to parse article:", error);
    return null;
  }
}

async function main() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));

  const issueNumber = event.issue.number;
  const issueBody = event.issue.body;

  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

  const url = extractUrl(issueBody);
  if (!url) {
    console.log("No URL found in the issue body.");
    process.exit(1);
  }

  const articleData = parseArticle(url);
  if (!articleData) {
    console.log("Failed to parse article");
    process.exit(1);
  }

  const { content: markdownContent, title } = articleData;
  const filename = createFilename(title);
  const filepath = `_posts/${filename}`;

  const branchName = `new-post/${filename.replace('.md', '')}`;

  try {
    const { data: refData } = await octokit.request('GET /repos/{owner}/{repo}/git/ref/{ref}', {
      owner,
      repo,
      ref: "heads/main",
    });

    const { data: pullRequest } = await octokit.createPullRequest({
      owner,
      repo,
      title: `Add article: ${title}`,
      body: `Closes #${issueNumber}`,
      head: branchName,
      base: "main",
      changes: [
        {
          files: {
            [filepath]: markdownContent,
          },
          commit: `Add article: ${title}`,
        },
      ],
      createWhenEmpty: false,
    });

    console.log(`Pull request created: ${pullRequest.html_url}`);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1);
  }
}

main();
