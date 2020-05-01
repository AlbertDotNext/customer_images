const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/customer_image';
const autoIncrement = require('mongoose-auto-increment');
// Set up default mongoose connection
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
// get default connection
mongoose.connection.once('open', () => console.log('Connected to DB!'));
autoIncrement.initialize(mongoose.connection);
// Define schema
const Schema = mongoose.Schema;

let customerImageSchema = new Schema({
  customerName: String,
  imagesUrl: Array,
  reviewStars: Number,
  reviewTitle: String,
  reviewContent: String,
  createdDate: Date
});
customerImageSchema.plugin(autoIncrement.plugin, 'CustomerImage');
// complied model from schema
module.exports = mongoose.model('CustomerImage', customerImageSchema);

