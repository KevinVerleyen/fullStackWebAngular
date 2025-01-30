import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ageFanSerie(ageMinimum : number) {
    return (control : AbstractControl) : ValidationErrors | null => {
        const dateNaissance : Date = new Date(control.value);
        const anneeNaissance : number = dateNaissance.getFullYear();

        const anneeActuelle : number = new Date().getFullYear();

        const age : number = anneeActuelle - anneeNaissance;

        if (age >= ageMinimum){
            return null;
        }

        return { tropJeune : `Lâge minimum est de ${ageMinimum} ans.`}
    }
}