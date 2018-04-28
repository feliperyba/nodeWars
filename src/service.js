const swapi = require("swapi-node");
const assert = require("assert");
const request = require("request-promise");
const Starship = require("./starship");
const starshipList = [];
/*
 * Since the API does not have a getAll() solution
 */
function getStarshipData(url) {
  return asyncFetchPages(url)
    .then(response => {
      if (response.next != null) {
        return getStarshipData(response.next).then(function() {
          return starshipList;
        });
      }
    })
    .catch(err => {
      throw new Error(err.message);
    });
}

function asyncFetchPages(restLink) {
  return new Promise(function(resolve, reject) {
    swapi
      .get(restLink)
      .then(response => {
        response.results.forEach(value => {
          var starshipAux = new Starship(
            value.name,
            value.cost_in_credits,
            value.manufacturer,
            value.consumables,
            value.MGLT
          );
          starshipList.push(starshipAux);
        });
        resolve(response);
      })
      .catch(err => {
        reject(new Error("Something wrong during data request.", err.message));
      });
  });
}

/*
 * 
 */
module.exports = {
  asyncFetchPages,
  getStarshipData,
  starshipList
};
