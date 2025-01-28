import { Component } from '@angular/core';
import { DemoServiceService } from '../../../tools/services/demo-service.service';
import { Livre } from '../../../models/livre.model';

@Component({
  selector: 'app-livre-service',
  standalone: false,

  templateUrl: './livre-service.component.html',
  styleUrl: './livre-service.component.scss'
})
export class LivreServiceComponent {
    newTitre : string = "";

    constructor (private _demoService : DemoServiceService){
    }

    AjouterLivre() : void {
        if (this.newTitre.trim()) {

            this._demoService.AjouterUnLivre(this.newTitre);
            this.newTitre = "";
        }
    }
}
