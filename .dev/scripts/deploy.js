const themeKit = require('@shopify/themekit');
const yargs = require('yargs');
const path = require("path");

let { command = "deploy", env = null, verbose = true, allowLive = false } = yargs(process.argv).argv;

if(typeof process.env.NODE_ENV !== "undefined" && env === null) {
  env = process.env.NODE_ENV;
}

if(env === null) {
  env = "development";
}

function deploy() {
  const dir = path.resolve(__dirname, "../../dist");
  themeKit.command(command, {
    dir, 
    verbose, 
    "allow-live": allowLive,
    env, 
    config: path.join(dir, "./config.yml")
  }).then(() => {
    process.exit(0);
  }).catch(e => {
    process.exitCode = 1;
    throw e;
  });
}

deploy(command);

