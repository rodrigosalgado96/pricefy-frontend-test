import { AbstractControl } from '@angular/forms';

export function numberLengthValidator(control: AbstractControl) {
  
  let current = control.value.toString();
 
  if(current && current.length != 14) {
      return { wrongLength: true }
  }
  return null;
} 