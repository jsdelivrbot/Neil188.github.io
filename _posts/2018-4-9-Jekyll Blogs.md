---
layout: post
title: Github pages and Jekyll
categories: jekyll
tags: [jekyll,gitHub]
---

This blog is created using Jekyll, hosted on GitHub using GitHub Pages.

[GitHub Pages](https://pages.github.com/){{ site.new_tab }} are hosted directly from your repository, providing a very easy way to serve simple sites at zero cost.  It's very easy to set up, just create a repository called *username*.github.io, create a basic index.html page and once pushed to your repository your new page will be live at https://*username*.github.io, nice and easy!

<!--more-->

## Jekyll

GitHub Pages has builtin support for [Jekyll](https://jekyllrb.com/){{ site.new_tab }}, the static site generator, giving you a very easy way to set up a blog.  A nice easy way to get started with GitHub Pages and Jekyll is to use a starting point like [Jekyll Now](http://www.jekyllnow.com/){{ site.new_tab }}, created by Barry Clark.  Also, see this [Smashing Magazine](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/){{ site.new_tab }} article for a more detailed walkthrough.

## Project Sites

As well as the GitHub user page, you can also create project pages for your individual repositories.  This gives you a very easy way to serve up a Single Page App, using GitHub Pages.  A Project Site can be published from the master branch, a docs folder within the master branch, or a gh-pages branch, and once built will be available at https://*username*.github.io/*project-name*.  An example of a project page is the React Single Page App [Bulletin-Board](https://neil188.github.io/bulletin-board/){{ site.new_tab }} published from the gh-pages branch of the [Bulletin-Board repository](https://github.com/Neil188/bulletin-board){{ site.new_tab }}.

### gh-pages package

The [gh-pages](https://www.npmjs.com/package/gh-pages){{ site.new_tab }} package gives you an easy way to update your project site from your latest build.  Simply install the package:

```bash
npm i -D gh-pages
```

Then add a package script with your build directory:

```json
"scripts": {
    "deploy": "gh-pages -d build"
}
```

Now running `npm run deploy` will publish everything from your `build` folder to the `gh-pages` branch.
