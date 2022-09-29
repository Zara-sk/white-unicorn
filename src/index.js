if (process.env.NODE_ENV == "develop") {
  if (process.env.CLI == "client") {
    require("./clientEntry.tsx");
  } else {
    require("./loginEntry.tsx");
  }
} else {
  require("./clientEntry.tsx");
  require("./loginEntry.tsx");
}
