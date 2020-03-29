---
author: timolaak
layout: post
title: "Isolation Years"
link: http://dawnstar.berlin/2018/02/26/isolation-years/
date: 2020-03-29T15:22:30+01:00
slug: isolation-years
title: Isolation Years
tags:
  - metal
---

{{< spotify track 5HGzGElmhG7Fk2d0qh00Zh >}}

Hello from the world of isolation and social distancing!

As I don't have better things to do, I decided to finally give some love to this blog. I updated the dependencies (yeah, got warnings about vulnerabilities...) and refactored the build system. It's still not ideal and I had completely forgotten how everything works. That's not really a surprise as I initially migrated this site from [WordPress.com](https://wordpress.com) to a [Hugo static site generator](https://gohugo.io) about 2 years ago.

I have very much developed a love hate relationship towards [Webpack](https://webpack.js.org). It's really cool when everything works, but it's also really complicated to tweak an existing configuration. Hugo doesn't have the lowest learning curve either so my blog feels like an unmaintainable mess. Creating apps like this is easy if you work on them every day. You just keep building knowledge and it stays in your memory until you have that long break and everything you once mastered has been forgotten.

Theme editing is not something I need to do often. I just build it once and it's done until something needs to be changed. I wasn't able to get the live reload working in development mode and I can't remember if that has ever even worked.

I also had to tweak the manifest structure to be able to read it from Hugo templates. That's something potentially breaking in the future. Technical debt, I know, I know. Maybe I should just migrate to [Gatsby](https://www.gatsbyjs.org)?

If you have any tips how to improve this mess, I have made [the source code for this blog public on GitHub](https://github.com/tlaak/Dawnstar). PRs welcome as usual.
