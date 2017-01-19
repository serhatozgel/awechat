Awechat.Component.SendBox = function () {

	var _api = new Awechat.Api();
	var _messageBox = new Awechat.Component.MessageBox;

	this.createElement = function () {
		var div = document.createElement("div");
		div.className = "awechat-send-box";
		div.appendChild(createSendInput());
		div.appendChild(createSendButton());
		return div;
	};

	function createSendInput() {
		var input = document.createElement("input");
		input.type = "text";
		input.className = "awechat-send-input";
		input.id = "awechat-send-input";
		return input;
	}

	function createSendButton() {
		var input = document.createElement("input");
		input.type = "button";
		input.className = "awechat-send-button";
		input.id = "awechat-send-button";
		input.value = "Send";

		input.addEventListener("click", sendButton_click);
		return input;
	}

	function sendButton_click(messageBoxCreatorFunc) {
		var sendInput = document.getElementById("awechat-send-input");
		var sendButton = document.getElementById("awechat-send-button");
		var message = sendInput.value;
		var messageBox = _messageBox.createElement(message);

		var chatBox = document.getElementById("awechat-chat-box");
		chatBox.appendChild(messageBox);

		sendInput.disabled = true;
		sendButton.disabled = true;

		_api.sendMessage(message, function () {
			sendInput.value = "";
			sendInput.disabled = false;
			sendButton.disabled = false;
		});
	}

}