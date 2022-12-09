const path = require("path");
const solc = require("solc"); //solidity compiler
const fs = require("fs-extra");

//1. Delete entire 'build' folder
const buildPath = path.resolve(__dirname, "build"); //current working directory/build
fs.removeSync(buildPath);

//2. Read 'Campaign.sol' from the 'contracts' folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

//3. Compile both contracts with solidity compiler
const input = {
  language: "Solidity",
  sources: {
    "Campaign.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Campaign.sol"
];

//4. Write output to the 'build' directory
fs.ensureDirSync(buildPath); //create build folder

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildPath, `${contract.replace(":", "")}.json`),
    output[contract] //actual content that I want to write in json file
  );
}
