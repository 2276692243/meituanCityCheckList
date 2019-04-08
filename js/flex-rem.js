(function(win, doc) {
	var win = window;
	var doc = win.document;
	var docEl = doc.documentElement,
		resizeEvt = "orientationchange" in win ? "orientationchange" : "resize",
		recalc = function() {
			var clientwidth = docEl.clientWidth;
			if(!clientwidth) {
				return false;
			}
			var fz = (clientwidth / 375)*16+ "px"
			docEl.style.fontSize = fz
			var realfz = win.getComputedStyle(docEl).fontSize
			if(fz !== realfz) {
				docEl.style.fontSize = fz.replace("px", '') * (fz.replace("px", '') / realfz.replace("px", '')) + "px"
			}
		};
	if(!doc.addEventListener) {
		return false;
	}
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener("DOMContentLoaded", recalc, false);
})(window, document)