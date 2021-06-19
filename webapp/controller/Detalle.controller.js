sap.ui.define([
    "com/iris/familia/controller/BaseController",
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.iris.familia.controller.Detalle", {
			onInit: function () {

            },
            Atras: function(){
                this.onNavBack();
            }
		});
	});
