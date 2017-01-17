function AwechatEvent() {

	this.sendButton_click = function(messageBoxCreator) {
		return function() {
			var sendInput = document.getElementById("awechat-send-input");
			var messageBox = new AwechatComponentMessagebox().create(sendInput.value);

			var chatBox = document.getElementById("awechat-chat-box");
			chatBox.appendChild(messageBox);

			sendInput.value = "";
		};
	};

}
