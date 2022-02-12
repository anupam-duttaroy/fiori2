sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
	"sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox, MessageToast, JSONModel, ODataModel) {
        "use strict";

        return Controller.extend("demoproject1.controller.View1", {
            onInit: function () {
                var model = new ODataModel("https://services.odata.org/v2/northwind/northwind.svc");
                this.getView().setModel(model);

                var model1 = new JSONModel(); 
                model1.loadData("../model/simpledata.json"); 
                this.getView().setModel(model1);
            },

            onPress: function(){
                console.log("clicked");
                const supplierName = this.getView().byId("name").getValue();
                MessageBox.success(supplierName, {
                 actions: ["Op1", "Op2", MessageBox.Action.CLOSE],
                 onClose: function(sAction){
                     MessageToast.show("Selected" + sAction);
                 }   
                });

            },

            onChange: function(evt) {
                console.log(evt.getSource().getValue());
            }
        });
    });
