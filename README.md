# Customer Images

Built using full-stack knowledge, the Customer Images functionality is one part of a larger Amazon clone. The component is able to render all customer images, as well as all customer reviews and associated data based on a single customer ID.

## Contributors

- [Eric Su - Product Description](https://github.com/GHesericsu/product-images-viewer)
- [Sumit Lal - Carousel](https://github.com/sumitSLal/video-carousel)
- [Albert Wu - Customer Images](https://github.com/AlbertWu2020/customer-images)
- [Jake Turchetta - Customer Reviews](https://github.com/jaketurchetta/customer-reviews)

## Tech Stack

All functionality in this project was built primarily with ReactJS on the front end, Node/Express on the back end, and MongoDB/MySQL for the database.

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://cloud.mongodb.com/static/images/mdb_logo.svg" width='100'/>
<img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" width="100">

## User Stories

- As a User, I should be able to view images in customer review content.
  <img src="demoImage1.png" width="500">
- As a User, I should be able to refine customer review by selecting a relavant image.
  <img src="demoImage2.png" width="500">
- As a User, I should be able to browse all customer images, and have it connected to the main review content view.

  <img src="demoImage3.png" width="500">

## Table of Contentes

1. Usage
2. Requirements
3. Development

## Usage

1. Install npm package in root directory:

```
npm install
```

2. Create container by running the app in the background:

```
docker-compose up -d
```

3. Navigating to localhost:3003

```
http://localhost:3003
```

4. Disconnect server and clean up

```
docker-compose down --rm all
```

## Requirements

An `nvmrc` file is included if using nvm.

- Node 6.13.0
- nodemon
- MongoDB

## Development

### Installing Dependencies

From within the root directory:

```#!/bin/bash
npm install -g webpack
npm install axios
npm install body-parser
npm install express
npm install mongoose
npm install react
npm install react-dom
```
