import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function telValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value as string;

        if (!/^(\+32|0032|0)[1-9](\d{2}){3}$/.test(value)) {
            return {
                tel: "Ceci n'est pas un numéro de téléphone valide"
            }
        }
        return null;
    }

}
