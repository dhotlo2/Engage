function dashboard() {
	document.getElementById('app').style.zIndex = "3";
	document.getElementById('me').style.zIndex = "2";
	document.getElementById('se').style.zIndex = "1";
}

function me() {
	document.getElementById('app').style.zIndex = "2";
	document.getElementById('me').style.zIndex = "3";
	document.getElementById('se').style.zIndex = "1";
}

function se() {
	document.getElementById('app').style.zIndex = "1";
	document.getElementById('me').style.zIndex = "2";
	document.getElementById('se').style.zIndex = "3";
}