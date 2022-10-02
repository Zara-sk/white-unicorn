const { aliasWebpack, aliasJest } = require("react-app-alias");

const options = {};

const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/launcherEntry.tsx",
    template: "public/launcher.html",
    outPath: "/launcher.html",
    omitHash: false,
  },
  {
    entry: "src/authEntry.tsx",
    template: "public/auth.html",
    outPath: "/auth.html",
    omitHash: false,
  },
]);
const { override } = require("customize-cra");

module.exports = {
  webpack: override(aliasWebpack(options), multipleEntry.addMultiEntry),
  jest: aliasJest(options),
};
