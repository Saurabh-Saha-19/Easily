export default class JobModel {
  constructor(
    id,
    jobCategory,
    jobDesignation,
    jobLocation,
    companyName,
    salary,
    applyBy,
    skillsReq,
    numberOfOpenings
  ) {
    this.id = id;
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salary = salary;
    this.applyBy = applyBy;
    this.skillsReq = skillsReq;
    this.numberOfOpenings = numberOfOpenings;
  }

  static addJob(job) {
    const newJob = { id: jobs.length + 1, ...job };
    jobs.push(newJob);
    console.log(jobs);
  }
}

let jobs = [];
