module.exports = {
	executeRequest: function(method, url, data) {
		var request = require("request");
		var defer = protractor.promise.defer();

		var requestOptions = {uri: url, method: method, json: true};
		if(data !== undefined && (method === "POST" || method === "PUT")) {
			requestOptions.body = data;
		}

		// method can be GET, POST or PUT
		request(requestOptions, function(error, response, body) {
			if (error || response.statusCode >= 400) {
				defer.reject({
					error : error,
					message : response
				});
			} else {
				defer.fulfill(body);
			}
		});

		// Return a promise so the caller can wait on it for the request to complete
		return defer.promise;
	},

	waitForPromise: function(promiseFn, testFn) {
		browser.wait(function () {
			var deferred = protractor.promise.defer();
			promiseFn().then(function (data) {
				deferred.fulfill(testFn(data));
			});
			return deferred.promise;
		});
	}
};
