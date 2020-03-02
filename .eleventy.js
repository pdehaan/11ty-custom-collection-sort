module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("docs", collection => {
    const docs = collection.getFilteredByGlob("src/docs/*.njk")
      .sort((a, b) => Number(a.data.order) - Number(b.data.order));
    console.log(docs);
    return docs;
  });
  
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
