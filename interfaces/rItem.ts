import Mongoose = require("mongoose");

interface rItem extends Mongoose.Document {
 //   itemID: number;
    //userID: number;
 //   reviewID: number;
 //   dateCreated: Date;
    title: string;
    price: number;
    condition: number;
    description: string;
    image: string;
    location: string;
}
export default rItem;