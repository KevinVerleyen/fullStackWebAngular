import { Component } from '@angular/core';
import { StockageSessionService } from '../../../tools/services/stockage-session.service';

@Component({
  selector: 'app-session',
  standalone: false,

  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
    doonneeLocale : any = null;
    doonneeSession : any = null;

    constructor(private _stockageService : StockageSessionService) {}


    enregistrerLocalStorage() : void{
        const data = {nom : 'Angular', version : 18};
        this._stockageService.definitionLocalStorage('framework', data)
    }

    recupererLocalStorage() : void {
        this.doonneeLocale = this._stockageService.obtenirLocalStorage('framework');
    }

    supressionLocalStorage(): void {
        this._stockageService.supprimerLocalStorage('framework');
    }

    //---------------------------------------------

    enregistrerSessionStorage() : void{
        const data = {nom : 'Angular', version : 18};
        this._stockageService.definitionSessionStorage('framework', data)
    }

    recupererSessionStorage() : void {
        this.doonneeSession = this._stockageService.obtenirSessionStorage('framework');
    }

    supressionSessionStorage(): void {
        this._stockageService.supprimerSessionStorage('framework');
    }
}
