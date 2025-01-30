import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Router } from '@angular/router';
import { ageFanSerie } from '../../../../tools/validators-custom/age-fan-serie.validator';
import { ThisReceiver } from '@angular/compiler';
import { Fan } from '../../../../models/fan-serie.model';

@Component({
  selector: 'app-ajout-fan',
  standalone: false,

  templateUrl: './ajout-fan.component.html',
  styleUrl: './ajout-fan.component.scss'
})
export class AjoutFanComponent {
    ajoutFanForm : FormGroup;
    erreurs : string = "";

    constructor(
        private _fansService : FanSerieService,
        private _fb : FormBuilder,
        private _router : Router
    ){
        this.ajoutFanForm = this._fb.group({
            nom : ['', Validators.required],
            dateNaissance : ['', [Validators.required, ageFanSerie(13)]],
            series : this._fb.array([this._fb.control('', Validators.required)])
        })
    }

    get series() : FormArray {
        return this.ajoutFanForm.get('series') as FormArray;
    }

    AjouterSerie() : void {
        this.series.push(this._fb.control('', Validators.required));
    }

    supprimerSerie(index : number) : void {
        if (this.series.length > 1) {
            this.series.removeAt(index);
        }
    }

    AjouterFan() : void{
        if (this.ajoutFanForm.invalid){
            this.erreurs = "Veuillez remplir tout les champrs correctement.";
            return;
        }

        if (this._fansService.FanExiste(this.ajoutFanForm.value.nom)){
            this.erreurs = `Le fans ${this.ajoutFanForm.value.nom} est déjà présent dans le système`;
        }

        const fan : Fan = {
            Nom : this.ajoutFanForm.value.nom,
            DateNaissance : new Date(this.ajoutFanForm.value.dateNaissance),
            Series : this.ajoutFanForm.value.series
        }

        this._fansService.AjouterFan(fan);
        this._router.navigate(['/exercices/fan-serie'])
    }
}
