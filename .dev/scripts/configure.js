const themeKit = require('@shopify/themekit');
const yargs = require('yargs');
const path = require("path");

const { env = 'development', store,  password, theme_id: themeid } = yargs(process.argv).argv;

function configure() {
  const dir = path.resolve(__dirname, "../../");
  return themeKit.command("configure", {
    password,
    store,
    themeid,
    env, 
    "ignored-file": "config/settings_data.json"
  }).then(() => {
    process.exit(0);
  }).catch(e => {
    process.exitCode = 1;
    throw e;
  });
}

configure();
