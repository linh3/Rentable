import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import rItem from '../interfaces/rItem';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class rItemModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
              //itemID: Number,
                userID: Number,
              //reviewID: Number,
              //dateCreated: Date,
                title: String,
                price: Number,
                condition: Number,
                description: String,
                image: String,
                location: String,
              //pickupAddress: String,
            }, {collection: 'ritem'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<rItem>("rritem", this.schema);
    }

    public retrieveItemWithKeyword(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

}