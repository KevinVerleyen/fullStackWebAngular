import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ajout',
  standalone: false,

  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.scss'
})
export class AjoutComponent {
    newArticle : string = "";

    @Output() ajouterArticleEvent : EventEmitter<string> = new EventEmitter<string>();

    AjouterArticle() : void {
        if(this.newArticle.trim()){
            this.ajouterArticleEvent.emit(this.newArticle);
            this.newArticle = "";
        } else {
            alert("Le nom d'article n'est pas valide....")
        }
    }
}
