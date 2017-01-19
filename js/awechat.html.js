function AwechatHTML() {

	var _api = new Awechat.Api.Pusher();
	var _sendBox = new Awechat.Component.SendBox(_api);

	this.createMain = function() {
		return createMainDiv();
	}

	function createMainDiv() {
		var div = document.createElement("div");
		div.className = "awechat-main";
		div.innerHTML = "Hello";
		div.appendChild(createChatBox());
		div.appendChild(_sendBox.createElement());
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