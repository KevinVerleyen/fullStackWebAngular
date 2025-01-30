import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Fan } from '../../../../models/fan-serie.model';

@Component({
  selector: 'app-details-fan',
  standalone: false,

  templateUrl: './details-fan.component.html',
  styleUrl: './details-fan.component.scss'
})
export class DetailsFanComponent {
    idFan : number;
    fan : Fan | undefined;
    trouver : boolean;

    constructor(
        private _ar : ActivatedRoute,
        private _fanService : FanSerieService,
        private _router : Router
    ){
        this.idFan  = parseInt(this._ar.snapshot.params['id']);
        this.fan = this._fanService.RecupererFan(this.idFan);
        this.trouver = _fanService.FanExiste(this.fan!.Nom);
    }

    ngOnInit(): void {
        console.log(this.idFan);
        console.log(this.fan);
    }

    moddifierFan() : void {
        this._router.navigate(['exercices/modifier-fan', this.fan!.Id]);
    }

    supressionFan() : void {
        this._fanService.SupprimerFan(this.fan!);
        alert('Fan supprimmé avec succès !!');
        this._router.navigate(['/exercices/fan-serie']);
    }
}