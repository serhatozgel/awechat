Awechat.Api = Awechat.Api || function (argument) {
};

Awechat.Api.Pusher = function () {

	var _pusher = new Pusher('b19b5db5a94dd4b9ee41', {
		cluster: "eu"
	});

	var _channel = _pusher.subscribe('private-channel');
	_channel.bind('pusher:subscription_succeeded', function() {
		console.log("subscribed to pusher");
	});

	this.sendMessage = function (message, callback) {
		var triggered = _channel.trigger('client-someeventname', { message: message });
		if (triggered) {
			console.log("triggered a pusher message");
		}
		callback();
	};

}
