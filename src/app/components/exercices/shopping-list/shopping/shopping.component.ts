import { Component } from '@angular/core';
import { Article } from '../../../../models/article.model';

@Component({
  selector: 'app-shopping',
  standalone: false,

  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
    articlesParent : Article[] = [];
    prochainId : number = 1;

    // Ajout article
    AjouterArticleParent(newNom : string) : void{
        this.articlesParent.push({Id :this.prochainId, Nom : newNom });
        this.prochainId ++;
    };

    // Supprimer article
    SupprimerArticle(id : number) : void{
        let index = this.articlesParent.findIndex(article => article.Id === id);
        this.articlesParent.splice(index, 1);
    };
}
