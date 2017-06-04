"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var rUserModel = (function () {
    function rUserModel() {
        this.createSchema();
        this.createModel();
    }
    rUserModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            userID: Number,
            fName: String,
            lName: String,
            email: String,
            password: String
        }, { collection: 'ruser' });
    };
    rUserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("ruser", this.schema);
    };
    return rUserModel;
}());
exports["default"] = rUserModel;
