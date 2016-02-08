var executeRequest = require("./execute-request");
// var webdriver = require("selenium-webdriver");
// var chrome = require("selenium-webdriver/chrome");
// var path = require("chromedriver").path;
// var service = new chrome.ServiceBuilder(path).build();
// chrome.setDefaultService(service);
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

describe("Misquote of the Day", function() {
	it("should have some misquotes", function() {
			var misquotes = null;
			// executeRequest.executeRequest("GET", "https://bootcamp-coders.cnm.edu/~dmcdonald21/misquote-of-the-day/public_html/api/misquote/")
			// 	.then(function(data) {
			// 		misquotes = data;
			// 	});
			executeRequest.waitForPromise(function() {
				var getPromise = executeRequest.executeRequest("GET", "https://bootcamp-coders.cnm.edu/~dmcdonald21/misquote-of-the-day/public_html/api/misquote/");
				getPromise
					.then(function() {
						misquotes = data;
					});
				return(getPromise);
			});


			console.log(misquotes);

			// browser.wait(misquotes !== null, 5000, "misquotes should load within 5 seconds");
			// browser.driver.wait(function() {
			// 	return(misquotes !== null);
			// }, 5000, "misquotes should load within 5 seconds");
			// expect(misquotes.status).toEqual(200);
		});
});
