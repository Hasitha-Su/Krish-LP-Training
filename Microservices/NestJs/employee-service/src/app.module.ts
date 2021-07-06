import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module'
import { MONGO_CONNECTION } from './employees/dto/app.properties';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [EmployeesModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule { }
