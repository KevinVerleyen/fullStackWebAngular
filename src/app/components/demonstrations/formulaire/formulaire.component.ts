import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageMinimum } from '../../../tools/validators-custom/age-minimum.validator';

@Component({
    selector: 'app-formulaire',
    standalone: false,

    templateUrl: './formulaire.component.html',
    styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {
    formulaire: FormGroup;
    complet : boolean = false;

    constructor(private _formBuilder: FormBuilder) {
        this.formulaire = this._formBuilder.group({
            nom: ['', Validators.required], // Assure que le nom est bien encodé
            age: ['', [Validators.required, ageMinimum(15)]],
            email: ['', [Validators.required, Validators.email]],
            genre: ['', Validators.required],
            hobbies: this._formBuilder.array([this._formBuilder.control('', Validators.required)]),
            pays: ['', Validators.required]
        })
    }

    get hobbies(){
        return this.formulaire.get('hobbies') as FormArray;
    }

    ajouterHobbie(){
        this.hobbies.push(this._formBuilder.control('', Validators.required));
    }


    valider() : void {
        console.log(this.formulaire.value);
        this.complet = true;
    }
}
