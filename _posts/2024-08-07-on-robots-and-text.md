---
layout: post
title: "On Robots and Text"
author: null
date: 2024-06-20
canonical_url: https://pxlnv.com/blog/on-robots-and-text/
---

After [Robb Knight found](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent/) — and [_Wired_ confirmed](https://www.techmeme.com/240619/p23#a240619p23) — Perplexity summarizes websites which have followed its [opt out instructions](https://docs.perplexity.ai/docs/perplexitybot), I noticed a number of people making a similar claim: this is nothing but a big misunderstanding of the function of controls like `robots.txt`. A [Hacker News comment thread](https://news.ycombinator.com/item?id=40691342) contains several versions of these two arguments:

*   `robots.txt` is only supposed to affect automated crawling of a website, not explicit retrieval of an individual page.
    
*   It is fair to use a [user agent string](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) which does not disclose automated access because this request was not automated per se, as the user explicitly requested a particular page.
    

That is, publishers should expect the controls provided by Perplexity to apply only to its indexing bot, not a user-initiated page request. Wary of being the kind of person who replies to pseudonymous comments on Hacker News, this is an unnecessarily absolutist reading of how site owners expect the Robots Exclusion Protocol to work.

To be fair, that protocol was [published in 1994](http://www.robotstxt.org/orig.html), well before anyone had to worry about websites being used as fodder for large language model training. And, to be fairer still, it has [never been formalized](https://developers.google.com/search/blog/2019/07/rep-id). A spec was [only recently proposed](https://datatracker.ietf.org/doc/html/rfc9309) in September 2022. It has so far been [entirely voluntary](https://blog.archive.org/2017/04/17/robots-txt-meant-for-search-engines-dont-work-well-for-web-archives/), but the draft standard proposes a [more rigid expectation](https://datatracker.ietf.org/doc/html/rfc9309#section-2.3.1.1-1) that rules will be followed. Yet it does not differentiate between different types of crawlers — those for search, others for archival purposes, and ones which [power the surveillance economy](https://pipl.com/bot) — and contains no mention of A.I. bots. Any non-human means of access is expected to comply.

The question seems to be whether what Perplexity is doing ought to be considered crawling. It is, after all, responding to a direct retrieval request from a user. This is subtly different from how a user might search Google for a URL, in which case they are asking whether that site is in the search engine’s existing index. Perplexity is ostensibly following real-time commands: _go fetch this webpage and tell me about it_.

But it clearly is also crawling in a more traditional sense. The [_New York Times_](https://www.nytimes.com/robots.txt) and [_Wired_](https://www.wired.com/robots.txt) both disallow `PerplexityBot`, yet I was able to ask it to summarize a set of recent stories from [both](https://www.perplexity.ai/search/summarize-the-five-9VnFJxMITLiX9Q6P0rV0Zw) [publications](https://www.perplexity.ai/search/summarize-the-five-PocA0teAT4mRmqsjebCzPQ). At the time of writing, the _Wired_ summary is about seventeen hours outdated, and the _Times_ summary is about two days old. Neither publication has changed its `robots.txt` directives recently; they were both blocking Perplexity last week, and they are blocking it today. Perplexity is not fetching these sites in real-time as a human or web browser would. It appears to be scraping sites which have explicitly said that is something they do not want.

Perplexity should be following those rules and it is shameful it is not. But what if you ask for a real-time summary of a particular page, [as Knight did](https://rknight.me/blog/perplexity-ai-is-lying-about-its-user-agent/)? Is that something which should be identifiable by a publisher as a request from Perplexity, or from the user?

The Robots Exclusion Protocol may be voluntary, but a more robust method is to block bots [by detecting their user agent string](https://ethanmarcotte.com/wrote/blockin-bots/). Instead of expecting visitors to abide by your “[No Homers Club](https://www.youtube.com/watch?v=W7rSYzbpA8k)” sign, you are checking IDs. But these strings are [unreliable](https://httpd.apache.org/docs/2.4/en/howto/access.html) and there are often [good reasons](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) for evading user agent sniffing.

Perplexity says its bot is identifiable by both its [user agent](https://docs.perplexity.ai/docs/perplexitybot) and the [IP addresses](https://www.perplexity.ai/perplexitybot.json) from which it operates. Remember: this [whole controversy](https://www.techmeme.com/240619/p23#a240619p23) is that it sometimes discloses neither, making it impossible to differentiate Perplexity-originating traffic from a real human being — and there is a difference.

A webpage being rendered through a web browser is subject to the quirks and oddities of that particular environment — ad blockers, Reader mode, screen readers, user style sheets, and the like — but there is a [standard](https://html.spec.whatwg.org/multipage/). A webpage being rendered through Perplexity is actually being reinterpreted and modified. The original text of the page is transformed through automated means about which neither the reader or the publisher has any understanding.

This is true even if you ask it for a direct quote. I asked for a full paragraph of a [recent article](https://www.perplexity.ai/search/Can-you-quote-XUuEHcyhR0S1bTR.ytkZbw) and it mashed together two separate sections. They are direct quotes, to be sure, but the article must have been interpreted to generate this excerpt.[1](#fn:1)

It is simply not the case that requesting a webpage through Perplexity is akin to accessing the page via a web browser. It is more like automated traffic — even if it is being guided by a real person.

The existing mechanisms for restricting the use of bots on our websites are imperfect and limited. Yet they are the [only tools we have](https://pxlnv.com/linklog/perplexity-user-agent/) right now to opt out of participating in A.I. services if that is something one wishes to do, short of putting pages or an entire site behind a user name and password. It is completely reasonable for someone to assume their signal of objection to any robotic traffic ought to be respected by legitimate businesses. The absolute least Perplexity can do is respecting those objections by clearly and consistently identifying itself, and excluding websites which have indicated they do not want to be accessed by these means.