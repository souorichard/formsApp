import { FormGroup } from '@angular/forms';

export const comparedValidator = (
  controlName: string,
  comparedName: string
) => {
  const valid = ( formGroup: FormGroup ) => {
    const control = formGroup.controls[controlName];
    const compared = formGroup.controls[comparedName];

    if (control.errors) {
      return;
    }

    if (control.value !== compared.value) {
      compared.setErrors({compared: true});
    } else {
      compared.setErrors(null);
    }
  };

  return valid;
};
