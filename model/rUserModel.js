"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1.default.mongooseInstance;
var mongooseConnection = DataAccess_1.default.mongooseConnection;
class rUserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = mongoose.Schema({
            userID: Number,
            fName: String,
            lName: String,
            email: String,
            password: String,
        }, { collection: 'ruser' });
    }
    createModel() {
        this.model = mongooseConnection.model("ruser", this.schema);
    }
    retrieveUserWithID(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
}
exports.default = rUserModel;
