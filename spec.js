require("./execute-request");
console.log(typeof execute-request.executeRequest);


describe("Misquote of the Day", function() {
	it("should have some misquotes", function() {
			executeRequest("GET", "https://bootcamp-coders.cnm.edu/~dmcdonald21/misquote-of-the-day/public_html/api/misquote/")
			.then(function(data) {
				console.log("yay! teh data!");
			});
		});
});
