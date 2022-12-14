const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// filters
const htmlDateString = require("./src/_11ty/filters/date.js").htmlDateString;
const head = require("./src/_11ty/filters/head.js");

// collections
const infosDescending = require("./src/_11ty/collections/infosDescending.js");
const tagList = require("./src/_11ty/collections/tagList.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/scss/");

  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("head", head);

  eleventyConfig.addCollection("infosDescending", infosDescending);
  eleventyConfig.addCollection("tagList", tagList);

  // keine Ahnung, was das tut :-)
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy({
    "./src/assets/images": "/images"
  });
  eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy({"./src/assets/scss/fonts": "css/fonts"});
  eleventyConfig.addPassthroughCopy({
    "./src/static/": "/"
  });

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
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  eleventyConfig.addShortcode("figImg", function (img, figCaption, alt) {
    return `<figure class="card">
      <img src="../../../images/${img}" class="card-img-top" alt="${alt}">  
      <figcaption class="card-footer">${figCaption}</figcaption>  
    </figure>`;
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
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "_site",
    },
  };
};
