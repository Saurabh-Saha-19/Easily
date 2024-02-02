import JobModel from "../models/job.model.js";

export default class JobController {
  getNewJob(req, res, next) {
    res.render("new-job");
  }
  postNewJob(req, res, next) {
    const newJob = req.body;
    JobModel.addJob(newJob);
  }
}
