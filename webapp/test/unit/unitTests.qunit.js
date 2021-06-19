/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comiris./familia/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
