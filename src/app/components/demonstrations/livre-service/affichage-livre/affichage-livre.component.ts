import { Component } from '@angular/core';
import { DemoServiceService } from '../../../../tools/services/demo-service.service';
import { Livre } from '../../../../models/livre.model';

@Component({
  selector: 'app-affichage-livre',
  standalone: false,

  templateUrl: './affichage-livre.component.html',
  styleUrl: './affichage-livre.component.scss'
})
export class AffichageLivreComponent {
    livres : Livre[]

    constructor (private _demoService : DemoServiceService) {
        this.livres = _demoService.livres
    }

    supprimer(id : number) : void {
        this._demoService.SupprimerLivre(id);
    }
}
