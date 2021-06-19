sap.ui.define([
    "com/iris/familia/controller/BaseController",
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.iris.familia.controller.Main", {
			onInit: function () {

            },
            
            Ir: function(oEvent){
              this.getRouter().navTo("Detalle");  
            }
		});
	});
