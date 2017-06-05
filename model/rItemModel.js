"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class rItemModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
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
            location: String,
        }, { collection: 'ritem' });
    }
    createModel() {
        this.model = mongooseConnection.model("rritem", this.schema);
    }
    retrieveItemWithKeyword(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.default = rItemModel;
