"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var rItemModel = (function () {
    function rItemModel() {
        this.createSchema();
        this.createModel();
    }
    rItemModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            //itemID: Number,
            //userID: Number,
            //reviewID: Number,
            //dateCreated: Date,
            title: String,
            price: Number,
            condition: Number,
            description: String,
            image: String,
            location: String
        }, { collection: 'ritem' });
    };
    rItemModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("rritem", this.schema);
    };
    rItemModel.prototype.retrieveItemWithKeyword = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return rItemModel;
}());
exports["default"] = rItemModel;
