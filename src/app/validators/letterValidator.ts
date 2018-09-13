import { ValidatorFn, AbstractControl } from '@angular/forms';

export function letterValidator(letter: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if(control.value)
      return control.value.includes(letter.toLowerCase())? null: {letterValidator : true, letter}
    else{
      return {letterValidator : true, letter};
    }
  };
}