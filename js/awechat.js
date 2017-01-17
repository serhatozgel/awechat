function Awechat() {

	this.createInside = function (elementName) {
		var html = new AwechatHTML();
		var main = html.createMain();
		document.getElementById(elementName).appendChild(main);
	}

}
