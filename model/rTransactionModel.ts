import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import rTransaction from '../interfaces/rTransaction';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class rTransactionModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
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
            }, {collection: 'rtransaction'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<rTransaction>("rtransaction", this.schema);
    }

}