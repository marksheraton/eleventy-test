const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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