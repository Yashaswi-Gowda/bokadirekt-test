# BokaDirect
## Design
app.js - Server is configured and APIs are defined here.
processor.js - search method is defined here, which accept user inputs and return results that matched the provided service name.
 
test/
    app.js
    processorTest.js
        
## Requirements
- Node v12.18.2
- npm v6.14.5

## Common setup
### Clone the repo and install the dependencies.

### Open command prompt and execute the below commands
git clone https://github.com/Yashaswi-Gowda/bokadirekt-test.git
cd bokadirekt-test

### Install the node dependencies:
npm install

### Test Requirements
chai v4.2.0
mocha v8.1.3
supertest v6.0.1
sinon v9.1.0

### Run the testcases:
npm test

### Start the server:
node app.js

Express HTTP service is running at port 3000, and /search API is availble.
Test the service by sending HTTP GET request.
#### For example:
http://localhost:3000/search?service=Mass%C3%B6r&lat=59.40211099999999&lng=18.105118499999963

#### Gives the output:

  
  "totalHits": 10,
  "totalDocuments": 10,
  "results": [
    {
      "id": 1,
      "name": "Massage",
      "position": {
        "lat": 59.3166428,
        "lng": 18.0561182999999
      },
      "distance": "9.90km",
      "score": 1
    },
    {
      "id": 2,
      "name": "Salongens massage",
      "position": {
        "lat": 59.3320299,
        "lng": 18.023149800000056
      },
      "distance": "9.07km",
      "score": 1
    },
    {
      "id": 3,
      "name": "Massör",
      "position": {
        "lat": 59.315887,
        "lng": 18.081163800000013
      },
      "distance": "9.68km",
      "score": 0
    },
    {
      "id": 4,
      "name": "Svensk massage",
      "position": {
        "lat": 59.3433317,
        "lng": 18.090476800000033
      },
      "distance": "6.59km",
      "score": 1
    },
    {
      "id": 5,
      "name": "Thaimassage",
      "position": {
        "lat": 59.31952889999999,
        "lng": 18.062400900000057
      },
      "distance": "9.50km",
      "score": 1
    },
    {
      "id": 6,
      "name": "LPG-massage",
      "position": {
        "lat": 59.34411099999999,
        "lng": 18.049118499999963
      },
      "distance": "7.19km",
      "score": 1
    },
    {
      "id": 7,
      "name": "Massage 30 min",
      "position": {
        "lat": 59.44411099999999,
        "lng": 18.049118499999963
      },
      "distance": "5.64km",
      "score": 1
    },
    {
      "id": 8,
      "name": "Ansiktsmassage",
      "position": {
        "lat": 59.44411099999999,
        "lng": 18.149118499999965
      },
      "distance": "5.29km",
      "score": 1
    },
    {
      "id": 9,
      "name": "Massage",
      "position": {
        "lat": 59.40411099999999,
        "lng": 18.109118499999962
      },
      "distance": "317m",
      "score": 1
    },
    {
      "id": 10,
      "name": "Härlig massage",
      "position": {
        "lat": 59.40211099999999,
        "lng": 18.105118499999964
      },
      "distance": "0m",
      "score": 1
    }
  ]
}