import { Injectable, NotFoundException } from '@nestjs/common';
// import { Employee, EmplopyeeTier, EmployeeStatus } from './employee.model';
import { EmplopyeeTier, EmployeeStatus } from '../employee.enum';
import { v1 as uuid } from 'uuid'
import { EmployeeSearchDto } from '../dto/employee.dto';
import { EmployeeUpdateDto } from '../dto/employeeUpdate.dto';
import { EmployeeCreateDto } from '../dto/employeeCreate.dto';
import { Employee } from '../schemas/Employee.schema'
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable()
export class EmployeesService {

    // private employees: Employee[] = []
    constructor(private employeeRepository: EmployeeRepository) {

    }

    // getAllEmployees(): Employee[] {
    async getAllEmployees(): Promise<Employee[]>{
        //return this.employeeRepository.create()
        return await this.employeeRepository.findAll()
    }

    /*
    createEmployee(firstName: string, lastName: string, designation: string, nearestCity: string, tier: EmplopyeeTier) {

        const Employee = {
            id: uuid(),
            firstName,
            lastName,
            designation,
            nearestCity,
            tier,
            status: EmployeeStatus.ACTIVE
        }

        this.employees.push(Employee)
        return Employee
    }
    */
    async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee> {

        // const { firstName, lastName, designation, nearestCity, tier } = employeeCreateDto

        // const Employee = {
        //     id: uuid(),
        //     firstName,
        //     lastName,
        //     designation,
        //     nearestCity,
        //     tier,
        //     status: EmployeeStatus.ACTIVE
        // }

        // this.employees.push(Employee)
        // return Employee

        return await this.employeeRepository.create(employeeCreateDto)
    }

    // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    //     const { status, name } = employeeSearchDto

    //     let employees = this.getAllEmployees()

    //     if (status) {
    //         employees = employees.filter(employee => employee.status === status)
    //     }

    //     if (name) {
    //         employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name))
    //     }

    //     return employees
    // }

    // getEmploeeById(id: string): Employee {
    //     const employee = this.getAllEmployees()
    //     return employee.find(employee => employee.id === id)
    // }

    // getEmploeeById(id: string): Employee {
    //     const employees = this.getAllEmployees()
    //     let employee = employees.find(employee => employee.id === id)
    //     if (!employee) {
    //         throw new NotFoundException(`${id} is not exist `)
    //     }
    //     return employee
    // }

    // updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {

    //     const { id, city } = employeeUpdateDto
    //     let employee = this.getEmploeeById(id)
    //     employee.nearestCity = city
    //     return employee
    // }

    // deleteEmployee(id: string): boolean {
    //     let employees = this.getAllEmployees()
    //     this.employees = employees.filter(employee => employee.id != id)
    //     return (employees.length != this.employees.length)
    // }
}