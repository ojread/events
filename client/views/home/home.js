Template.home.events({
	'click #enterFullScreen': function (e) {
		var el = document.documentElement;//document.getElementsByTagName('html')[0];

		if (el.requestFullScreen) {
			el.requestFullScreen();
		} else if (el.msRequestFullscreen) {
			el.msRequestFullscreen();
		} else if (el.mozRequestFullScreen) {
			el.mozRequestFullScreen();
		} else if (el.webkitRequestFullScreen) {
			el.webkitRequestFullScreen();
		} else {
			window.alert ('Fullscreen is not supported by your browser.');
		}
	}
});
