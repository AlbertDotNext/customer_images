const AWS = require('aws-sdk');
const Config = require('../database/config/config.js');
const BUCKET_NAME = 'customerimage2020';
const IAM_USER_KEY = 'Config.iamUser';
const IAM_USER_SECRET = 'Config.iamSecret';

(async function() {
  try {
    AWS.Config.setPromisesDependency();
    AWS.Config.update({
      accessKeyId: Config.iamUser,
      secretAccessKey: Config.iamSecret,
      region: 'us-west-1'
    });
    const s3 = new AWS.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'customerimage2020'
    }).promise();
    console.log(response);
  } catch (e) {
    console.log()
  }

})

// uploadToS3((file) => {
//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME,
//   });
//   s3bucket.createBucket(function () {
//     var params = {
//       Bucket: BUCKET_NAME,
//       Key: file.name,
//       Body: file.data,
//     };
//     s3bucket.upload(params, function (err, data) {
//       if (err) {
//         console.log('error in callback');
//         console.log(err);
//       }
//       console.log('success');
//       console.log(data);
//       uploadToS3(file);
//     });
//   });
// });