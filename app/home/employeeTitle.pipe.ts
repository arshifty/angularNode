import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'employeeGender'
})

export class EmployeeGenderPipe implements PipeTransform {

transform(value: String , gender: any): string {
  if(gender.toLowerCase() == 'male') {
    return "Mr. "+ value;
  } else {
    return "Miss."+ value;
  }
}
}