import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Commandes } from '../../../../models/commande.model';

@Component({
  selector: 'app-enfant',
  standalone: false,

  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
    nomNewCommande : string = "";
    isUpdate : boolean = false;

    // Prop's d'entrée pour recevoir la commande
    @Input() commande : any;

    // Év"nement de sortie (output) pour moidifier le parent de la donnée de suppression
    @Output() suppressionEnfant : EventEmitter<number> = new EventEmitter<number>();
    @Output() updateEnfant : EventEmitter<Commandes> = new EventEmitter<Commandes>();


    supprimer(commandeId : number) : void {
        this.suppressionEnfant.emit(commandeId)
    }

    afficherUpdate(nom : string) : void {
        this.nomNewCommande = nom;
        this.isUpdate = !this.isUpdate;
    }

    sauvegarde(commandeId : number) : void{
        this.updateEnfant.emit({Id : commandeId, Nom : this.nomNewCommande})
        this.isUpdate = !this.isUpdate;
    }
}
