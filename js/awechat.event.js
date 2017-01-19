function AwechatEvent() {

	this.sendButton_click = function(messageBoxCreatorFunc) {
		return function() {
			var sendInput = document.getElementById("awechat-send-input");
			// var messageBox = new AwechatComponentMessagebox().create(sendInput.value);
			var messageBox = messageBoxCreatorFunc(sendInput.value);

			var chatBox = document.getElementById("awechat-chat-box");
			chatBox.appendChild(messageBox);

			sendInput.value = "";
		};
	};

}
