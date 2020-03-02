module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("docs", collection => {
    const docs = collection.getFilteredByGlob("src/docs/*.njk")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  });

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
