import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    private _articles : {Nom : string, Quantite : number}[] = [
        {Nom : "test", Quantite : 5}
    ]
    constructor() { }

    // CRUD

    // Read
    // Get articles
    GetArticles() {
        return this._articles;
    }

    // Create
    // Ajouter article
    AjouterArticle(nom : string, quantite : number) {
        const article = this._articles.find(article => article.Nom === nom);
        if (article){
            article.Quantite += quantite;
            alert(`Le produit ${nom} existe dejà dans le panier \nQuantité incrémentée de ${quantite}`);
        } else {
            this._articles.push({Nom : nom, Quantite : quantite});
        }
    }

    // Update
    // Update quantite
    UpdateArticle(nom : string, quantite : number) {
        const article = this._articles.find(article => article.Nom === nom);
        if (article){
            article.Quantite = quantite;
            if (article.Quantite <= 0) {
                this.SupprimerArticle(nom)
            }
        }
    }

    // Delete
    // Supprimer article
    SupprimerArticle(nom :string) {
        this._articles = this._articles.filter(article => article.Nom !== nom);
    }
}
