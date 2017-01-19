Awechat.Api = function () {

	var _ajax = new Awechat.Ajax();

	this.sendMessage = function (message, callback) {
		_ajax.post({
			url: "/messages",
			data: { message: message },
			complete: callback
		});
	}
}
