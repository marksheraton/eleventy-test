const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
	});
	
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