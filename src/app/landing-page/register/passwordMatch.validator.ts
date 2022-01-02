
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')
    const confirmPass = group.get('confirmPass');
    if(password?.pristine || confirmPass?.pristine){
        return null;
    }

    return !password || !confirmPass || password?.value != confirmPass?.value ? {passMatch: true} : null;
}