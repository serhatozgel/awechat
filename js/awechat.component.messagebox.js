Awechat.Component.MessageBox = {};

Awechat.Component.MessageBox.create = function (text) {
	var div = document.createElement("div");
	div.className = "awechat-message-box";
	div.innerHTML = text;
	return div;
};