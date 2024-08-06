---
layout: post
title: "Third-party cookies have got to go"
author: null
date: 2024-08-06
canonical_url: https://www.w3.org/blog/2024/third-party-cookies-have-got-to-go/
---

After reading [Google’s announcement that they no longer plan to deprecate third-party cookies](https://privacysandbox.com/news/privacy-sandbox-update/), we wanted to make our position clear. We have updated our TAG finding [Third-party cookies must be removed](https://www.w3.org/2001/tag/doc/web-without-3p-cookies) to spell out our concerns.

Third-party cookies are not good for the web. They enable tracking, which involves following your activity across multiple websites. They can be helpful for use cases like login and single sign-on, or putting shopping choices into a cart — but they can also be used to invisibly track your browsing activity across sites for surveillance or ad-targeting purposes. This hidden personal data collection hurts everyone’s privacy.

We aren’t the only ones who are worried. The updated [RFC that defines cookies](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#name-third-party-cookies) says that third-party cookies have “inherent privacy issues” and that therefore web “resources cannot rely upon third-party cookies being treated consistently by user agents for the foreseeable future.” We agree. Furthermore, tracking and subsequent data collection and brokerage can support micro-targeting of political messages, which can have a detrimental impact on society, [as identified by Privacy International](https://privacyinternational.org/sites/default/files/2021-01/UoE_PI%20Micro-targeting%20in%20policital%20campaigns%20comparative%20analysis%202021.pdf) and other organizations. Regulatory authorities, such as the UK’s Information Commissioner’s Office, have [also called for the blocking of third-party cookies](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/07/ico-statement-in-response-to-google-announcing-it-will-no-longer-block-third-party-cookies/).

The job of the TAG as stewards of the architecture of the web has us looking at the big picture (the whole web platform) and the details (proposed features and specs). We try to provide guidance to spec authors so that their new technologies fill holes that need to be filled, don’t conflict with other parts of the web, and don’t set us up for avoidable trouble in the future.

[We’ve been working with Chrome’s Privacy Sandbox team](https://github.com/w3ctag/design-reviews/issues?q=is%3Aissue+label%3A%22Provenance%3A+Privacy+Sandbox%22+) (as well as others in the W3C community) for several years, trying to help them create better approaches for the things that third-party cookies do. While we haven’t always agreed with the Privacy Sandbox team, we have made substantial progress together. This [announcement](https://privacysandbox.com/news/privacy-sandbox-update/) came out of the blue, and undermines a lot of the work we’ve done together to make the web work without third-party cookies.

The unfortunate climb-down will also have secondary effects, as it is likely to delay cross-browser work on effective alternatives to third-party cookies. We fear it will have an overall detrimental impact on the cause of improving privacy on the web. We sincerely hope that Google reverses this decision and re-commits to a path towards removal of third-party cookies.

We have updated our [finding](https://www.w3.org/2001/tag/doc/web-without-3p-cookies) to highlight the importance of removing third-party cookies from the web. We will continue to offer our help to those trying to make the web better (as we write in our design principle [Leave the web better than you found it](https://www.w3.org/TR/design-principles/#leave-the-web-better)), and we hope that all browsers and user agents will continue to work collaboratively to make that happen.