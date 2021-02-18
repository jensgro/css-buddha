const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addPassthroughCopy("src/fonts");

  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
