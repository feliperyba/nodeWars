const logic = require("../src/logic");
//checkInput(input)
test("checkInputSuccess", () => {
  expect(logic.checkInput("10000")).toBeUndefined();
});
test("checkInputNaN", () => {
  expect(() => {
    logic.checkInput("1 hour");
  }).toThrow(Error("Valid this is not. Input a correct number you need."));
});
test("checkInput0", () => {
  expect(() => {
    logic.checkInput("0");
  }).toThrow(Error("Valid this is not. Input a correct number you need."));
});
test("checkInputNegative", () => {
  expect(() => {
    logic.checkInput("-10");
  }).toThrow(Error("Valid this is not. Input a correct number you need."));
});
///
//convertToHours(consumables)
test("convertToHoursSuccess", () => {
  expect(logic.convertToHours("1 hour")).toBe(1);
});
test("convertToHoursFailCorrupted", () => {
  expect(logic.convertToHours("1 parsec")).toBe(
    "the information on the model is corrupted or unknown"
  );
});
////
//travelTotalTime(mgltInput, mgltShip)
test("travelTotalTimeSuccess", () => {
  expect(logic.travelTotalTime(10, 2)).toBe(5);
});
test("travelTotalTimeFailNaN", () => {
  expect(logic.travelTotalTime("fail", 2)).toBe(
    "the information on the model is corrupted."
  );
});
test("travelTotalTimeFail0", () => {
  expect(logic.travelTotalTime(10, 0)).toBe(
    "0 MGLT from this ship? This must be broken."
  );
});
////
//totalStops(travelTime, tank)
test("totalStopsSuccess", () => {
  expect(logic.totalStops(10, 2)).toBe(5);
});
test("totalStopsFailNaN", () => {
  expect(logic.totalStops("fail", 2)).toBe(
    "the information on the model is corrupted or unknown."
  );
});
test("totalStopsFail0", () => {
  expect(logic.totalStops(10, 0)).toBe(
    "the information on the model is corrupted or unknown."
  );
});
////
