import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: false,

  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {
    idUtilisateur! : number;

    constructor(private _router : Router){}

    envoyerId() {
        if (this.idUtilisateur){
            this._router.navigate(['/demonstrations/profil', this.idUtilisateur])
        }
    }
}