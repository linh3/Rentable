import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import rCard from '../interfaces/rCard';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class rCardModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                cardID: Number,
                creditCardNumber: String,
                address: String,
                expDate: String,
                cvv: String,
            }, {collection: 'rcard'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<rCard>("rcard", this.schema);
    }

}