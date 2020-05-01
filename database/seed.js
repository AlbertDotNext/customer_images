const CustomerImage = require('./index.js');
const faker = require('faker');

let images = [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()];
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


