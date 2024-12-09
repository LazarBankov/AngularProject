import { ValidatorFn } from '@angular/forms';

export function equalPassValidator(
  passwordControlName: string,
  rePasswordControlName: string
): ValidatorFn {
  return (control) => {
    const passFormControl = control.get(passwordControlName);
    const rePassFormControl = control.get(rePasswordControlName);

    const equalPasses = passFormControl?.value === rePassFormControl?.value;

    return equalPasses ? null : { equalPassValidator: true };
  };
}
