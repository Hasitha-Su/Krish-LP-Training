import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { EmployeeSearchDto } from './dto/employee.dto';
// import { EmplopyeeTier } from './employee.model';
import { EmplopyeeTier } from './employee.enum';
import { EmployeeCreateDto } from './dto/employeeCreate.dto';
import { EmployeesService } from './service/employees.service';
import { EmployeeUpdateDto } from './dto/employeeUpdate.dto';
import { Employee } from './schemas/Employee.schema';

@Controller('employees')
export class EmployeesController {

    constructor(private _employeeService: EmployeesService) {

    }

    // @Get()
    // getAllEmployees() {
    //     return this._employeeService.getAllEmployees()
    // }

    @Get()
    async getAllEmployees(@Query() param: EmployeeSearchDto): Promise<Employee[]> {
        console.log(param)

        //common mistake
        // if (param) {

        // if (Object.keys(param).length) {
        //     console.log("filter")
        //     return this._employeeService.employeeSearch(param)
        // } else {
        //     console.log("No filter")
        //     return this._employeeService.getAllEmployees()
        // }
        return await this._employeeService.getAllEmployees()
    }

    /*
    @Post()
    createEmployee2(@Body() request) {
        return this._employeeService.createEmployee(request.firstName, request.lastName, request.designation, request.nearestCity, request.tier)
    }
    */

    /*
    @Post()
    createEmployee(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('designation') designation: string,
        @Body('nearestCity') nearestCity: string,
        @Body('tier') tier: EmplopyeeTier) {

        return this._employeeService.createEmployee(firstName, lastName, designation, nearestCity, tier)

    }
    */

    @Post()
    @UsePipes(ValidationPipe)

    //validating the tier
    @UsePipes(new EmployeeTierValidationPipe())  /** this takes entier object */
    // createEmployee(@Body() employeeCreateDto: EmployeeCreateDto, @Body("tier", EmployeeTierValidationPipe) tier: string ) {  /** this takes only the tier */
    
    createEmployee(@Body() employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
        return this._employeeService.createEmployee(employeeCreateDto)

    }

    // @Get("/:id")
    // getEmployeeById(@Param('id') id: string) {
    //     return this._employeeService.getEmploeeById(id)
    // }

    // @Put("/:id/city")
    // updateEmployee(@Param('id') id: string, @Body() employeeupdateDto: EmployeeUpdateDto) {
    //     employeeupdateDto.id = id
    //     return this._employeeService.updateEmployee(employeeupdateDto)
    // }

    // @Delete("/:id")
    // @HttpCode(204)
    // deleteEmployee(@Param("id") id: string) {
    //     console.log("d")
    //     if (!this._employeeService.deleteEmployee(id)) {
    //         throw new NotFoundException("Employee does not exist")
    //     }
    // }
}