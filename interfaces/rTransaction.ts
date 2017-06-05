import Mongoose = require("mongoose");

interface rTransaction extends Mongoose.Document {
    transactionID: number;
    lenderID: number;
    renterID: number;
    lenderPaymentID: number;
    renterPaymentID: number;
    itemID: number;
    beginDate: Date;
    endDate: Date;
    tStatus: number;
    lenderReviewID: number;
    renterReviewID: number;
}
export default rTransaction;