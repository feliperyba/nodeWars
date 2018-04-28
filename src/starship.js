function Starship(name, cost, manufacturer, consumables, mglt) {
  if (!name || !cost || !manufacturer || !consumables || !mglt) {
    throw new Error("starship data is required");
  }
  this.name = name;
  this.cost = cost;
  this.manufacturer = manufacturer;
  this.consumables = consumables;
  this.mglt = mglt;
  this.fullTank = "";
  this.stops = "";
}

module.exports = Starship;
