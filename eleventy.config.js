const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	
	// Current year for footer
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	
	// Make dates human readable
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
	});
	
	// Copy `assets/images/` to `_site/assets/images`
	eleventyConfig.addPassthroughCopy("src/assets/images");
	
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