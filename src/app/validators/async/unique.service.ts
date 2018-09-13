import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, retry, take, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniqueService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(ctrl)
        // return of({ uniqueAlterEgo: true }).pipe(
        //                 delay(1000),
        //                 catchError(() => null)
        // )
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => null)
    );
  }
}
