module.exports = function(eleventyConfig) {
  // STATIC FILES
  eleventyConfig.addPassthroughCopy({ './static/': '/' });

  // Merge all data!
  eleventyConfig.setDataDeepMerge(true);
}