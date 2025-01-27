import { Component } from '@angular/core';
import { Commandes } from '../../../../models/commande.model';
import { commandes } from '../commande.datas';

@Component({
  selector: 'app-parent',
  standalone: false,

  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
    commandes : Commandes[] = commandes

    // supprimer
    supprimerParId(idCommande : number) : void{
        const index  : number = this.commandes.findIndex(commande => commande.Id === idCommande)
        this.commandes.splice(index, 1);
    }

    // Update
    updateEnfant( commandeUpdate : Commandes) : void{
        const index  : number = this.commandes.findIndex(commande => commande.Id === commandeUpdate.Id);
        this.commandes[index].Nom = commandeUpdate.Nom;
    }
}
