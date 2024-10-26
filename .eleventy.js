const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");

// filters
const htmlDateString = require("./src/_11ty/filters/date.js").htmlDateString;
const head = require("./src/_11ty/filters/head.js");

// collections
// const infosDescending = require("./src/_11ty/collections/infosDescending.js");
// const tagList = require("./src/_11ty/collections/tagList.js");

const {
  getAllPosts,
  getAllNotes
} = require("./src/_11ty/collections/index.js");

const configPath = "./src/_11ty/";

// neu
// const markdownLib = require('./config/plugins/markdown.js');
// const {slugifyString} = require('./config/utils');


module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/scss/");

  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("head", head);

  // eleventyConfig.addCollection("infosDescending", infosDescending);
  // eleventyConfig.addCollection("tagList", tagList);
  eleventyConfig.addCollection("getAllPosts", getAllPosts);
  eleventyConfig.addCollection("getAllNotes", getAllNotes);

  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPlugin(embedCodePen, {
		tabs: "html, css, js,result",
		user: "jensgro",
    height: 500,
    theme: "flocke"
	});

   // --------------------- layout aliases -----------------------
   eleventyConfig.addLayoutAlias('base', 'base.njk');
   eleventyConfig.addLayoutAlias('page', 'page.njk');
   eleventyConfig.addLayoutAlias('post', 'post.njk');
  //  eleventyConfig.addLayoutAlias('home', 'home.njk');
  //  eleventyConfig.addLayoutAlias('blog', 'blog.njk');

  // keine Ahnung, was das tut :-)
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy({
    "./src/assets/images": "/images",
    "./src/assets/fonts": "/fonts",
    "./src/static/": "/"
  });
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPlugin(syntaxHighlight);

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  });

  // Watch CSS files for changes
  // eleventyConfig.setBrowserSyncConfig({
  //   files: './_site/css/**/*.css'
  // });

  eleventyConfig.setServerOptions({
    showAllHosts: true,
    showVersion: true
  });

  eleventyConfig.addShortcode("figImg", function (img, figCaption, alt) {
    return `<figure class="card">
      <img src="../../../images/${img}" class="card-img-top" alt="${alt}">
      <figcaption class="card-footer">${figCaption}</figcaption>
    </figure>`;
  });
  eleventyConfig.addShortcode("myImg", function (img, alt) {
    return `<img src="../../../images/${img}" class="my-image" alt="${alt}"`;
  });
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site",
    },
  };
};
