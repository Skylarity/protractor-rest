// require("./execute-request");
// console.log(typeof execute-request.executeRequest);

var request = require("request");
// var executeRequest = function(method, url, data) {
// 	var defer = protractor.promise.defer();
//
// 	var requestOptions = {uri: url, method: method, json: true};
// 	if(data !== undefined && (method === "POST" || method === "PUT")) {
// 		requestOptions.body = data;
// 	}
// 	​
// 	// method can be ‘GET’, ‘POST’ or ‘PUT’
// 	request(requestOptions, function(error, response, body) {
// 	​
// 		if (error || response.statusCode >= 400) {
// 			defer.reject({
// 				error : error,
// 				message : response
// 			});
// 		} else {
// 			defer.fulfill(body);
// 		}
// 	});
//
// 	// Return a promise so the caller can wait on it for the request to complete
// 	return defer.promise;
// };

var executeRequest = function() {
	return(true);
};

describe("Misquote of the Day", function() {
	it("should have some misquotes", function() {
			executeRequest("GET", "https://bootcamp-coders.cnm.edu/~dmcdonald21/misquote-of-the-day/public_html/api/misquote/")
			.then(function(data) {
				console.log("yay! teh data!");
			});
		});
});
