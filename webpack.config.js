let mode = "development";
var config;

if("NODE_ENV" in process.env && typeof process.env.NODE_ENV !== "undefined") {
  mode = process.env.NODE_ENV;
}

try {
  config = require(`./webpack.${mode}`);
} catch(e) {
  throw Error(e);
}

module.exports = config;
