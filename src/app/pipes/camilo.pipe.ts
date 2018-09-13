import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camiloPipe'
})
export class CamiloPipe implements PipeTransform {

  transform(value: number[], ...args): any {
    let [min, max] = args;

    return value.filter(x => x > min && x < max);
  }

}
