import { Injectable } from '@angular/core';
import { Livre } from '../../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
    livres : Livre[] = [
        {Id : 1, Titre : "Harry potter"},
        {Id : 2, Titre : "Le Monde de Narnia"},
        {Id : 3, Titre : "Sherlock Holmes"}
    ]
    nextId : number = this.livres.length + 1

    AjouterUnLivre(newTitre : string) : void {
        let newLivre : Livre = {
            Id : this.nextId,
            Titre : newTitre
        };

        this.livres.push(newLivre)
        this.nextId ++;
    }

    SupprimerLivre(id : number) : void{
        const index  : number = this.livres.findIndex(livre => livre.Id === id)
        this.livres.splice(index, 1);
        this.nextId = this.livres.length + 1;
    }
}
