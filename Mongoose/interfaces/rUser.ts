import Mongoose = require("mongoose");

interface rUser extends Mongoose.Document {
    userID: number;
    fName: string;
    lName: string;
    email: string;
    password: string;
    /*
    loginStatus: number;
    contactNum: string;
    location: string;
    address: string;
    itemID: [
        {
            num: number;
        }
    ];
    optionID: [
        {
            num: number
        }
    ];
    transactionID: [
        {
            num: number;
        }
    ];
    reviewID: [
        {
            num: number
        }
    ];
    */
}
export default rUser;