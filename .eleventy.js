const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const EleventyNavigation = require('@11ty/eleventy-navigation');
const EleventyBundlePlugin = require('@11ty/eleventy-plugin-bundle');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigation);
  eleventyConfig.addPlugin(EleventyBundlePlugin);

  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('./public');
  eleventyConfig.addPassthroughCopy('./src/sw.js');

  eleventyConfig.addWatchTarget('./src/**/*.{css,js}');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
    },
  };
};
