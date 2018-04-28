const starCommander = require("commander");
const { prompt } = require("inquirer");
const { checkMGLT } = require("./logic");

starCommander
  .version("0.0.1")
  .description(
    "MGLT Analysis Corp.\r Choosing the best option for your galaxy travel"
  );

const questions = [
  {
    type: "input",
    name: "value",
    message:
      "\rHi galaxy traveller! \r\rTell us how many MGLT you are planning to travel and we will indicate the best startships for your needs. \r"
  }
];
starCommander
  .command("checkMGLT")
  .alias("c")
  .description("Provide MGLT score information on the available starships.")
  .action(() => {
    prompt(questions)
      .then(input => checkMGLT(input))
      .catch(err => {
        console.log("Error:" + err.message);
      });
  });

// Assert that a VALID command is provided
if (/[arudl]/.test(process.argv.slice(2))) {
  starCommander.outputHelp();
  process.exit();
}

starCommander.parse(process.argv);
