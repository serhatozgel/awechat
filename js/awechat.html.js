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
		div.appendChild(Awechat.Component.SendBox.create());
		return div;
	}

	function createChatBox() {
		var div = document.createElement("div");
		div.className = "awechat-chat-box";
		div.innerHTML = "Chat Box";
		div.id = "awechat-chat-box";
		return div;
	}

}