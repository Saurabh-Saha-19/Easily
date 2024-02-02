import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import JobController from "./src/controllers/job.controller.js";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(express.urlencoded({ extended: true }));
server.use(ejsLayouts);
server.use(express.static("public"));

const jobController = new JobController();

server.get("/", jobController.getNewJob);

server.post("/jobs", jobController.postNewJob);

export { server };
