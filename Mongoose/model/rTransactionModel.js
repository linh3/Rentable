"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class rTransactionModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
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
            renterReviewID: Number,
        }, { collection: 'rtransaction' });
    }
    createModel() {
        this.model = mongooseConnection.model("rtransaction", this.schema);
    }
}
exports.default = rTransactionModel;
