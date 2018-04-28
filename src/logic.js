const service = require("./service");
const assert = require("assert");
const Starship = require("./starship");
const starshipRestURL = "https://swapi.co/api/starships/";
const hoursEnum = Object.freeze({
  hour: "1",
  day: "24",
  week: "168",
  month: "730",
  year: "8760"
});

const checkMGLT = input => {
  checkInput(input.value);
  service
    .getStarshipData(starshipRestURL)
    .then(() => {
      doCalculation(input.value);
      printFinalResult();
    })
    .catch(err => {
      console.log("Error:" + err.message);
    });
};

const doCalculation = mgltInput => {
  service.starshipList.forEach(starship => {
    starship.fullTank = convertToHours(starship.consumables);
    starship.stops = totalStops(
      travelTotalTime(mgltInput, starship.mglt),
      starship.fullTank
    );
  });
};

const convertToHours = consumables => {
  consumablesData = checkConsumables(consumables);
  if (isNaN(consumablesData[0])) {
    return consumablesData;
  }
  total = consumablesData[0] * consumablesData[1];
  return total;
};

const travelTotalTime = (mgltInput, mgltShip) => {
  if (isNaN(mgltInput) || isNaN(mgltShip)) {
    return "the information on the model is corrupted.";
  }
  if (mgltShip <= 0) {
    return "0 MGLT from this ship? This must be broken.";
  }
  return mgltInput / mgltShip;
};

const totalStops = (travelTime, tank) => {
  if (isNaN(travelTime) || tank <= 0) {
    return "the information on the model is corrupted or unknown.";
  }
  total = Math.round(travelTime / tank);
  if (total < 0) total = 0;
  return total;
};

const printFinalResult = () => {
  console.log("\r\r/********************************/");
  console.log("/********************************/");
  console.log("/************ RESULTS ***********/");
  console.log("/********************************/");
  console.log("/********************************/\r\r\r\r");
  service.starshipList.forEach(function print(starship) {
    console.log("/----------------------------------/");
    console.log("/---> " + starship.name);
    console.log("/Total Stops with it : " + starship.stops);
    console.log("/************  INFO + *************/");
    console.log("/manufacturer :" + starship.manufacturer);
    console.log("/Credits $ :" + starship.cost);
    console.log("/MGLT :" + starship.mglt);
    console.log("/Full Tank :" + starship.fullTank);
    console.log("\r\r/********************************/\r\r");
  });
};

const checkInput = value => {
  if (isNaN(value) || value <= 0 || value.trim() == "") {
    throw new Error("Valid this is not. Input a correct number you need.");
  }
};

const checkConsumables = consumables => {
  if (consumables[consumables.length - 1] == "s") {
    consumables = consumables.substring(consumables.length - 1, 0);
  }
  var consumablesAux = consumables.split(" ");
  var enumToUse = Object.entries(hoursEnum)[
    Object.keys(hoursEnum).indexOf(consumablesAux[1])
  ];
  if (
    enumToUse === undefined ||
    isNaN(enumToUse[1]) ||
    (consumables === undefined || isNaN(consumablesAux[0]))
  ) {
    return "the information on the model is corrupted or unknown";
  }
  return [enumToUse[1], consumablesAux[0]];
};

module.exports = {
  checkMGLT,
  travelTotalTime,
  convertToHours,
  totalStops,
  doCalculation,
  checkInput
};
