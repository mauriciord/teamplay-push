const request = require('request');
const config = require('./configs/config');
const differenceBy = require('lodash/differenceBy');

let firstTime = true;
let loadedList;
let toSendList = [];
(function main() {
  request(config.optionsMatch, (error, response, body) => {
    if (error) throw new Error(error);

    if (firstTime) {
      loadedList = JSON.parse(body);
    }

    console.log(loadedList);

    setTimeout(main, config.checkApiInterval);
  });
}());
