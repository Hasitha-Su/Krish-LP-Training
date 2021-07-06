import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
// import { EmplopyeeTier } from "./employees/employee.model"
import { EmplopyeeTier } from "./employees/employee.enum"

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!(value.tier in EmplopyeeTier)) {
      throw new BadRequestException("Invalid tier")
       
    }
    return value;
  }
}
