import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: false,

  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
    // Propriétés du profil utilisateur
    nom : string = "John Doe";
    email : string = "JohnD@gmail.com";
    age : number = 28;
    enEdition : boolean = false;

    changementEtatModif(){
        this.enEdition = !this.enEdition;
    }

    sauvegardeModif(){
        this.changementEtatModif();
    }
}
