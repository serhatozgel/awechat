function AwechatComponentMessagebox() {

	this.create = function (text) {
		var div = document.createElement("div");
		div.className = "awechat-message-box";
		div.innerHTML = text;
		return div;
	};

}