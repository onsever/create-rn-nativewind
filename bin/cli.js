#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/onsever/create-rn-nativewind ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(
  `Creating a new React Native app with NativeWind dependency. ${repoName}.`
);

const checkedOut = runCommand(gitcheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}.`);
const installedDeps = runCommand(installDepsCommand);
if (!installDepsCommand) process.exit(-1);

console.log(`Congratulations! ${repoName} is ready to go!`);
console.log(`cd ${repoName} && yarn start`);
