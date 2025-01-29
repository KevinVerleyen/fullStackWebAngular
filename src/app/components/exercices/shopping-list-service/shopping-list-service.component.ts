import { Component } from '@angular/core';
import { ShoppingListService } from '../../../tools/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-service',
  standalone: false,

  templateUrl: './shopping-list-service.component.html',
  styleUrl: './shopping-list-service.component.scss'
})
export class ShoppingListServiceComponent {
    articles : {Nom : string, Quantite : number}[];
    newArticleNom = ""
    newArticleQantite = 1

    constructor (private _shoppingList : ShoppingListService){
        console.log(_shoppingList.GetArticles());
        this.articles = this._shoppingList.GetArticles();
    }

    AjouterArticle() : void{
        if(!this.newArticleNom.trim()){
            alert("L'article doit être e codé pour être validé ❌");
        } else if (this.newArticleQantite <= 0){
            alert("La quantité doit être supérieur à zéro ❌");
        } else {
            this._shoppingList.AjouterArticle(this.newArticleNom, this.newArticleQantite);
            this.articles = this._shoppingList.GetArticles();
            this.newArticleNom = "";
            this.newArticleQantite = 1;
            alert("Article ajoutés avec succès 👌");
        }
    }

    UpdateQuantite(nom : string, sens : string) : void{
        const article = this.articles.find(article => article.Nom === nom);
        if (article) {
            if (sens === "+") {
                this._shoppingList.UpdateArticle(nom, article.Quantite + 1);
            } else{
                this._shoppingList.UpdateArticle(nom, article.Quantite - 1);
            }
            this.articles = this._shoppingList.GetArticles();
        }
    }

    SupprimerArticle(nom : string) : void{
        this._shoppingList.SupprimerArticle(nom);
        this.articles = this._shoppingList.GetArticles();
    }
}