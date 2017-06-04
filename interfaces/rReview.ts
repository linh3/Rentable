import Mongoose = require("mongoose");

interface rReview extends Mongoose.Document {
    reviewID: number;
    itemID: number;
    renterID: number;
    lenderID: number;
    comment: string;
    star: number;
}
export default rReview;