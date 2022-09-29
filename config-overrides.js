const { aliasWebpack, aliasJest } = require("react-app-alias");

const options = {};

const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/clientEntry.tsx",
    template: "public/client.html",
    outPath: "/client.html",
    omitHash: false,
  },
  {
    entry: "src/loginEntry.tsx",
    template: "public/login.html",
    outPath: "/login.html",
    omitHash: false,
  },
]);
const { override } = require("customize-cra");

module.exports = {
  webpack: override(aliasWebpack(options), multipleEntry.addMultiEntry),
  jest: aliasJest(options),
};
