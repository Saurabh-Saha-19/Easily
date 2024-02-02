import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);
server.use(express.static("public"));

server.get("/", (req, res) => {
  res.render("new-job");
});

export { server };
