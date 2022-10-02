if (process.env.NODE_ENV == "development") {
  if (process.env.CLI == "launcher") {
    require("./launcherEntry.tsx");
  } else {
    require("./authEntry.tsx");
  }
} else {
  require("./launcherEntry.tsx");
  require("./authEntry.tsx");
}
