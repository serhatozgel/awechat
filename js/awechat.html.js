function AwechatHTML() {

	_event = new AwechatEvent();

	this.createMain = function() {
		return createMainDiv();
	}

	function createMainDiv() {
		var div = document.createElement("div");
		div.className = "awechat-main";
		div.innerHTML = "Hello";
		div.appendChild(createChatBox());
		div.appendChild(createSendBox());
		return div;
	}

	function createChatBox() {
		var div = document.createElement("div");
		div.className = "awechat-chat-box";
		div.innerHTML = "Chat Box";
		div.id = "awechat-chat-box";
		return div;
	}

	function createSendBox() {
		var div = document.createElement("div");
		div.className = "awechat-send-box";
		div.appendChild(createSendInput());
		div.appendChild(createSendButton());
		return div;
	}

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

		var sendButton_click = _event.sendButton_click();
		input.addEventListener("click", sendButton_click);
		return input;
	}

}