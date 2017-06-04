"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var rReviewModel = (function () {
    function rReviewModel() {
        this.createSchema();
        this.createModel();
    }
    rReviewModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            reviewID: Number,
            itemID: Number,
            renterID: Number,
            lenderID: Number,
            comment: String,
            star: Number
        }, { collection: 'rreview' });
    };
    rReviewModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("rreview", this.schema);
    };
    return rReviewModel;
}());
exports["default"] = rReviewModel;
