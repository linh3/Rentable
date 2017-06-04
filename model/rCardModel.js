"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var rCardModel = (function () {
    function rCardModel() {
        this.createSchema();
        this.createModel();
    }
    rCardModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            cardID: Number,
            creditCardNumber: String,
            address: String,
            expDate: String,
            cvv: String
        }, { collection: 'rcard' });
    };
    rCardModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("rcard", this.schema);
    };
    return rCardModel;
}());
exports["default"] = rCardModel;
