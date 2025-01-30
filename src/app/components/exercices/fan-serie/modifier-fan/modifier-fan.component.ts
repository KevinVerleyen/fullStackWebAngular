import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Fan } from '../../../../models/fan-serie.model';
import { ageFanSerie } from '../../../../tools/validators-custom/age-fan-serie.validator';

@Component({
  selector: 'app-modifier-fan',
  standalone: false,

  templateUrl: './modifier-fan.component.html',
  styleUrl: './modifier-fan.component.scss'
})
export class ModifierFanComponent {
    modifFanForm! : FormGroup;
    idFan! : number;
    erreurs : string = "";

    constructor(
        private _fb : FormBuilder,
        private _ar : ActivatedRoute,
        private _fanService : FanSerieService,
        private _router : Router
    ){}

    ngOnInit(): void {
        // R2cupérer l'id de la route courante
        this.idFan = parseInt(this._ar.snapshot.params['id']);

        // Récupérer un fan
        const fan : Fan | undefined = this._fanService.RecupererFan(this.idFan);

        if (fan) {
            // ajouter les valeurs dans les zones d'input
            const series = this._fb.array([]);

            fan.Series.forEach(serie => {
                series.push(this._fb.control(serie, Validators.required));
            })

            this.modifFanForm = this._fb.group({
                nom : [fan.Nom, Validators.required],
                dateNaissance : [fan.DateNaissance.toISOString().split('T')[0], [Validators.required, ageFanSerie(13)]],
                series : series
            })
        } else {
            this.erreurs = 'Fan introuvable...';
        }
    }
    get series() : FormArray{
        return this.modifFanForm.get('series') as FormArray
    }


    AjouterSerie() :void {
        this.series.push(this._fb.control('', Validators.required));
    }

    supprimerSerie(index : number) : void {
        if (this.series.length > 1) {
            this.series.removeAt(index);
        }
    }

    modifFan() :void {
        if (this.modifFanForm.invalid){
            this.erreurs = "Veuillez remplir tout les champrs correctement.";
            return;
        }

        const fan : Fan = {
            Nom : this.modifFanForm.value.nom,
            DateNaissance : new Date(this.modifFanForm.value.dateNaissance),
            Series : this.modifFanForm.value.series
        }

        this._fanService.MiseAjourFan(fan);
        this._router.navigate(['/exercices/fan-serie'])
    }
}
