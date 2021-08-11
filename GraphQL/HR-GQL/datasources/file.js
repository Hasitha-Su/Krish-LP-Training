const employees = require('../data/employees.json')
const { DataSource }  = require("apollo-datasource")
//datasource is a class

const _ = require("lodash")

class EmployeeService extends DataSource {
    
    constructor(){
        super()
    }

    initialize(config){}

    getEmployees(){
        return employees
    }

    findEmployeeById(id){
        return employees.filter(function(employee){
            return employee.id == id;
        })
    }

    filterEmpByAnyParam(args){
        //filter emploees based on args coming here
        return _.filter( employees, args )
    }
}

module.exports = EmployeeService