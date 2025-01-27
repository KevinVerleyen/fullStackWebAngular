import { Component } from '@angular/core';
import { Produit } from '../../../models/produit.model';

@Component({
  selector: 'app-liste-produit',
  standalone: false,

  templateUrl: './liste-produit.component.html',
  styleUrl: './liste-produit.component.scss'
})
export class ListeProduitComponent {
    produits : Produit[] = [
        { Nom: 'Laptop', Prix: 1200, Disponible: true, Categorie: 'Électronique', DateAjout: new Date('2023-01-15') },
        { Nom: 'Chaise', Prix: 150, Disponible: false, Categorie: 'Mobilier', DateAjout: new Date('2022-10-10') },
        { Nom: 'Montre', Prix: 300, Disponible: true, Categorie: 'Accessoires', DateAjout: new Date('2025-03-05') },
        { Nom: 'Téléphone', Prix: 800, Disponible: true, Categorie: 'Électronique', DateAjout: new Date('2023-02-20') },
        { Nom: 'Lampe', Prix: 60, Disponible: false, Categorie: 'Décoration', DateAjout: new Date('2022-12-01') },
        { Nom: 'Canapé', Prix: 700, Disponible: true, Categorie: 'Mobilier', DateAjout: new Date('2023-01-10') },
        { Nom: 'Casque Audio', Prix: 200, Disponible: true, Categorie: 'Électronique', DateAjout: new Date('2023-02-25') },
        { Nom: 'Vélo', Prix: 500, Disponible: false, Categorie: 'Sport', DateAjout: new Date('2022-09-15') },
        { Nom: 'Table', Prix: 300, Disponible: true, Categorie: 'Mobilier', DateAjout: new Date('2023-01-25') },
        { Nom: 'Sac à dos', Prix: 90, Disponible: true, Categorie: 'Accessoires', DateAjout: new Date('2023-03-12') }
    ];

    anneActuelle : number = new Date().getFullYear();
}
