const CustomerImage = require('./index.js');
const faker = require('faker');

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


