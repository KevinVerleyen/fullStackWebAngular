import { AbstractControl, ValidatorFn } from "@angular/forms";
                            18
export function ageMinimum(value : number) : ValidatorFn{
    return (control : AbstractControl) => {
        let valeurToCheck : number = control.value
        if (valeurToCheck == null) {
            return null
        } else if (valeurToCheck >= value){
            return null
        }
        return {erreurAge : `Lâge doit être supérieur ou égale à ${value}`}
    }
}