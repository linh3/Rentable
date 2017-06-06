import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import rUser from '../interfaces/rUser';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class rUserModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                userID: Number,
                fName: String,
                lName: String,
                email: String,
                password: String,
     //           loginStatus: Number,
    //            contactNum: String,
    //            location: String,
    //            address: String,
     //           itemID: [Number],
    //            optionID: [Number],
    //            transactionID: [Number],
   //             reviewID: [Number],
            }, {collection: 'ruser'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<rUser>("ruser", this.schema);
    }
    public retrieveUserWithID(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

}