const CustomerImage = require('./index.js');
const faker = require('faker/locale/en');
faker.locale = 'en';

let images = ['https://customerimage2020.s3-us-west-1.amazonaws.com/711KSkxhgiL.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/81u325t_IAL.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/7164sOEd2uL.jpg', 'https://customerimage2020.s3-us-west-1.amazonaws.com/813aPskuB3L.jpg'];

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


