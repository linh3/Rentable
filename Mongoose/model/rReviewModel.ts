import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import rReview from '../interfaces/rReview';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class rReviewModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                reviewID: Number,
                itemID: Number,
                renterID: Number,
                lenderID: Number,
                comment: String,
                star: Number,
            }, {collection: 'rreview'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<rReview>("rreview", this.schema);
    }

}