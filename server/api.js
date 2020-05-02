const AWS = require('aws-sdk');
const Config = require('../database/config/config.js');
const BUCKET_NAME = 'customerimage2020';
const IAM_USER_KEY = 'Config.iamUser';
const IAM_USER_SECRET = 'Config.iamSecret';

getImageObject = () => {
  try {
    AWS.Config.setPromisesDependency();
    AWS.Config.update({
      accessKeyId: Config.iamUser,
      secretAccessKey: Config.iamSecret,
      region: 'us-west-1'
    });
    const s3 = new AWS.S3();
    const response = s3.listObjectsV2({
      Bucket: 'customerimage2020'
    }).promise();
    console.log(response);
  } catch (e) {
    console.log(e);
  }

};

