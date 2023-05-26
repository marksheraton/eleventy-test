module.exports = function(eleventyConfig) {
	return {
		
		markdownTemplateEngine: "njk",
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: "njk",
		
		dir: {
			input: "src",
			output: "_site"
		}
	};
};