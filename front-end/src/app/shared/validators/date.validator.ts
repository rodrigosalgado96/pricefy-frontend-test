import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function dateBeforeToday(control: AbstractControl) {
  const today = new Date();
  const current = control.value;

  if (current && current < today) {
    return { isDateInconsistent: true };
  }
  return null;
}

export const datesValidator: ValidatorFn = (form: AbstractControl) => {
  const start = new Date(form.get('startDate')?.value);
  const end = new Date(form.get('endDate')?.value);

  if (start != null && end != null) {
    return start < end ? null : { invalidDate: true };
  }
  return null
};
