import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appMiloValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MiloValidatorDirective, multi: true}]
})
export class MiloValidatorDirective implements Validator{
  @Input('appMiloValidator') appMiloValidator: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    if(control.value)
      return control.value.includes(this.appMiloValidator)? null: {notIncludesC : true}
    else{
      return {notIncludesC : true};
    }
  }

}
