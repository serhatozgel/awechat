Awechat.Component.SendBox = {};

Awechat.Component.SendBox.create = function () {
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
	input.value = "Send";

	var sendButton_click = _event.sendButton_click(Awechat.Component.MessageBox.create);
	input.addEventListener("click", sendButton_click);
	return input;
}
