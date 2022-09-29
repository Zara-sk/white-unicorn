if (process.env.NODE_ENV == "develop") {
  if (process.env.CLI == "client") {
    require("./client.tsx");
  } else {
    require("./login.tsx");
  }
} else {
  require("./client.tsx");
  require("./login.tsx");
}
