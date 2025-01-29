import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  standalone: false,

  templateUrl: './profil-user.component.html',
  styleUrl: './profil-user.component.scss'
})
export class ProfilUserComponent {
    idRecup! : number;

    constructor (private _activatecRoute : ActivatedRoute){
        this.idRecup = this._activatecRoute.snapshot.params["id"]
    }
}
