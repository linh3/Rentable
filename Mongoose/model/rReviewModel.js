"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class rReviewModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            reviewID: Number,
            itemID: Number,
            renterID: Number,
            lenderID: Number,
            comment: String,
            star: Number,
        }, { collection: 'rreview' });
    }
    createModel() {
        this.model = mongooseConnection.model("rreview", this.schema);
    }
}
exports.default = rReviewModel;
