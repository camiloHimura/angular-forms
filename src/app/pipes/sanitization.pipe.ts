import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitization'
})
export class SanitizationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
