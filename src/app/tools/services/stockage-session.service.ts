import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StockageSessionService {


    /**
     * Stocke un élément en JSON dans le local storage
     * @param clef La clef sous laquelle l'élément est stocké
     * @param valeur L'élément a stocker (il sera convertis en JSON)
     */
    definitionLocalStorage(clef : string, valeur : any) : void {
        localStorage.setItem(clef, JSON.stringify(valeur));
    }

    obtenirLocalStorage(clef :string) : any | null {
        const item = localStorage.getItem(clef);
        return item ? JSON.parse(item) : null;
    }

    supprimerLocalStorage(clef : string) : void {
        localStorage.removeItem(clef);
    }

    definitionSessionStorage(clef : string, valeur : any) : void {
        sessionStorage.setItem(clef, JSON.stringify(valeur));
    }

    obtenirSessionStorage(clef :string) : any | null {
        const item = sessionStorage.getItem(clef);
        return item ? JSON.parse(item) : null;
    }

    supprimerSessionStorage(clef : string) : void {
        sessionStorage.removeItem(clef);
    }
}