Awechat.Component.MessageBox = function () {

	this.createElement = function (text, isSent) {
		var div = document.createElement("div");
		div.className = "awechat-message-box";			

		if (isSent) {
			div.className = div.className + " sent";
		} else {
			div.className = div.className + " received";
		}

		div.innerHTML = text;
		return div;
	};

};