import Mongoose = require("mongoose");

interface rCard extends Mongoose.Document {
   cardID: number;
   creditCardNumber: string;
   address: string;
   expDate: string;
   cvv: string;
}
export default rCard;