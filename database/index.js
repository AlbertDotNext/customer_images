const mongoose = require('mongoose');
const mongoDB = 'mongodb://database:27017/customer_image';
const autoIncrement = require('mongoose-auto-increment');
const faker = require('faker');

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

let CustomerImage = mongoose.model('CustomerImage', customerImageSchema);

for (let i = 0; i < 10; i++) {
  const images = [];
  let randomNum = Math.floor((Math.random() * 3) + 1);
  for (let j = 0; j < randomNum; j++) {
    const imageId = (Math.floor(Math.random() * 116) + 1).toString();
    images.push({ image: `https://customerimage2020.s3-us-west-1.amazonaws.com/images${imageId}.jpg` });
  }
  let customerInfo = new CustomerImage({
    customerName: faker.name.findName(),
    imagesUrl: images,
    reviewStars: faker.random.number(5),
    reviewTitle: faker.company.catchPhrase(),
    reviewContent: faker.hacker.phrase(),
    createdDate: faker.date.past(5)
  });
  customerInfo.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
}
// complied model from schema
module.exports = mongoose.model('CustomerImage', customerImageSchema);

