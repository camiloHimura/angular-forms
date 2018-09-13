import { ValidatorFn, AbstractControl } from '@angular/forms';

export function initialLetterValidator(letter: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const name = control.get('name');
    const lastName = control.get('lastName');

    if(name.value !== "" && lastName.value !== "")
      return name.value.startsWith(letter) && lastName.value.startsWith(letter)? null: {letterValidator : true, letter}
    else{
      return {initialLetterValidator : true, letter};
    }
  };
}