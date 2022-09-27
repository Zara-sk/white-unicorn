const { aliasWebpack, aliasJest } = require("react-app-alias");

const options = {};

const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/client.tsx",
    template: "public/client.html",
    outPath: "/client.html",
    omitHash: false,
  },
  {
    entry: "src/login.tsx",
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
