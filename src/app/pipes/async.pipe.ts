import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, from, interval, throwError, combineLatest, concat } from 'rxjs';
import { tap, map, catchError, retry, take, delay } from 'rxjs/operators';

@Pipe({
  name: 'asyncPipe'
})
export class AsyncPipe implements PipeTransform {

  transform(value: any, ...args): any {
    let [min, max] = args;
    
    return of(value).pipe(
            delay(2000),
            map((info: number[]) => info.filter(x => x > min && x < max))
          )
  }

}
