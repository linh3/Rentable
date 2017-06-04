"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var rTransactionModel = (function () {
    function rTransactionModel() {
        this.createSchema();
        this.createModel();
    }
    rTransactionModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            transactionID: Number,
            lenderID: Number,
            renterID: Number,
            lenderPaymentID: Number,
            renterPaymentID: Number,
            itemID: Number,
            beginDate: Date,
            endDate: Date,
            tStatus: Number,
            lenderReviewID: Number,
            renterReviewID: Number
        }, { collection: 'rtransaction' });
    };
    rTransactionModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("rtransaction", this.schema);
    };
    return rTransactionModel;
}());
exports["default"] = rTransactionModel;
