const { ApolloServer, gql } = require("apollo-server");

//no longer needed since service is there
// const employees = require("./data/employees.json");
const EmployeeService = require("./datasources/file");
const ProjectService = require("./datasources/projects");

//schema
//query type : array of employee
//exposing q query as employees and that will return a array of employees
//what this employee looks like (properties of the employee type)
// Dont type id as String. type it as ID. Because Id cant be null
//! mark indicates this is s ant null field

const typeDefs = gql`
  type Query {
    employees: [Employee]

    filterEmpByAnyParam(
      id: ID
      firstName: String
      lastName: String
      designation: String
      department: String
      nearestCity: String
    ): [Employee]

    findEmployeeById(id: ID): Employee

    projects: [Project]

    findProjectById(id: ID): Project
  }

  type Employee {
    id: ID!
    firstName: String
    lastName: String
    designation: String
      @deprecated(
        reason: "Company is changing the designation structure globally"
      )
    nearestCity: String
    projects: [Project]
  }

  type Project {
    id: ID!
    projectName: String
    startDate: String
    client: String
    employees: [Int]
  }
`;

//resolver
//Query:what this query is going to return

// const resolvers = {
//     Query: {
//         employees: ()=> {
//             // write anything you want
//             //    ex: get data from text File
//             //        talk to anoth graphql server or rest api what ever
//             return [{
//                 firstName:"John"
//             }]
//         }
//     }
// }

// const resolvers = {
//   Query: {
//     employees: (parent, args, {datasource}, info) => {
//       return employees;
//     },
//   },
// };

const dataSources = () => ({
  employeeService: new EmployeeService(),
  projectService: new ProjectService(),
});

const resolvers = {
  Query: {
    // get all employees
    employees: (parent, args, { dataSources }, info) => {
      return dataSources.employeeService.getEmployees();
    },

    // get employee by id
    findEmployeeById: (parent, { id }, { dataSources }, info) => {
      return dataSources.employeeService.findEmployeeById(id)[0];
    },

    // filter employees by parameters
    filterEmpByAnyParam: (parent, args, { dataSources }, info) => {
      return dataSources.employeeService.filterEmpByAnyParam(args);
    },

    // get all projects
    projects: (parent, args, { dataSources }, info) => {
      return dataSources.projectService.getProjects();
    },

    // get project by id
    findProjectById: (parent, { id }, { dataSources }, info) => {
      return dataSources.projectService.findProjectById(id);
    },
  },

  Employee: {
    async projects(employee, args, { dataSources }, info) {
      let projects = await dataSources.projectService.getProjects();
      let workingProjects = projects.filter((project) => {
        console.log('employee id '+employee.id)
        console.log(project.employees)
        // console.log(project.employees.includes(employee.id))
        return project.employees.includes(employee.id);
      });
      console.log(workingProjects)
      return workingProjects;
    },
  },
};

const gqlServer = new ApolloServer({ typeDefs, resolvers, dataSources });

gqlServer
  .listen({ port: process.env.port || 4000 })
  .then(({ url }) => console.log(`GraphQL server started on ${url}`));
