Awechat.Event = function () {

	var _api = new Awechat.Api();

	this.sendButton_click = function(messageBoxCreatorFunc) {
		return function() {
			var sendInput = document.getElementById("awechat-send-input");
			var message = sendInput.value;
			var messageBox = messageBoxCreatorFunc(message);

			var chatBox = document.getElementById("awechat-chat-box");
			chatBox.appendChild(messageBox);

			sendInput.disabled = true;

			sendToServer({
				message: message,
				completed: function () {
					sendInput.value = "";
				}
			});

		};
	};

	function sendToServer(messageObj) {
		_api.SendMessage({
			url: "/messages",
			data: { message: messageObj.message },
			completed: messageObj.completed
		});
	}

}
