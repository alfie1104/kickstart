const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: process.env.NODE_ENV !== "production",
});

/*
when use next-routes uncomment below line
In addition, script "dev" :"next dev" in package.json also has to be changed to "dev" : "node server.js"
// const routes = require("./routes");
// const handler = routes.getRequestHandler(app);
*/

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log("Ready on localhost:3000");
  });
});
