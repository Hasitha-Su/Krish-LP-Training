const { RESTDataSource } = require("apollo-datasource-rest");

class ProjectService extends RESTDataSource {
  constructor() {
    super();

    //we have to configure this aramenter to say the base url
    this.baseURL = "http://localhost:3000/";
  }

  // initialize(config) {}

  //since this is a async call this should be handles
  //promise
  getProjects() {
    return this.get("/projects")
      .then((projects) => {
        return projects;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //since this is a async call this should be handles
  //async
  async getProjectById(id) {
    return await this.get(`/projects/${id}`);
  }
}

module.exports = ProjectService;
