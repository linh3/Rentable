"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class rCardModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            cardID: Number,
            creditCardNumber: String,
            address: String,
            expDate: String,
            cvv: String,
        }, { collection: 'rcard' });
    }
    createModel() {
        this.model = mongooseConnection.model("rcard", this.schema);
    }
}
exports.default = rCardModel;
