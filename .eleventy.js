module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("docs", collection => {
    const docs = collection.getFilteredByGlob("src/docs/*.njk").sort((a, b) => {
      console.log(a.order, b.order);
      return b.order - a.order;
    });
    console.log(docs.length);
    console.log(docs)
    return docs;
  });
  
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
