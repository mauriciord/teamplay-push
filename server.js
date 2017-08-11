const request = require('request');
const config = require('./configs/config');

// let listaCarregada = [];
let vez = 1;
(function main() {
  request(config.optionsMatch, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
    console.log(`= = = = = = = = = ${vez}º vez = = = = =`);

    vez += vez;
    setTimeout(main, config.checkApiInterval);
  });
}());
