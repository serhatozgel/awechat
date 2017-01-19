Awechat.Ajax = function () {

	var baseUrl = "https://private-64db9b-awechat.apiary-mock.com";

	this.post = function (options) {
		var url = baseUrl + options.url;
		postJson(url, options.data,
			options.success || function () {},
			options.error || function () {},
			options.complete || function () {});
	};

	function postJson(url, data, success, error, complete) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function () { 

		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var json = JSON.parse(xhr.responseText);
				success(null, json);
			} else {
				error({ status: xhr.status });		
			}
			complete();
		}

		};

		var data = JSON.stringify(data);
		xhr.send(data);
	}

}