const CustomerImage = require('./index.js');
const faker = require('faker/locale/en');
faker.locale = 'en';
let images = ['https://customerimage2020.s3-us-west-1.amazonaws.com/31RLlD8w3cL._AC_SR320_320_.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/31exktxce2L._AC_SR320_320_.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/41BlATUghPL._AC_SR320_320_.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/41EMPWvb9-L.jpg'];
console.log(images);
for (let i = 0; i < 10; i++) {
  let customerInfo = new CustomerImage({
    customerName: faker.name.findName(),
    imagesUrl: images,
    reviewStars: faker.random.number(5),
    reviewTitle: faker.lorem.sentence(),
    reviewContent: faker.lorem.paragraph(),
    createdDate: faker.date.past(5)
  });
  customerInfo.save((err, data) => {
    if (err) {
      console.error(err);
    }
  });
}


