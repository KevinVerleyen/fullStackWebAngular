import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../../../models/article.model';

@Component({
  selector: 'app-affichage',
  standalone: false,

  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.scss'
})
export class AffichageComponent {
    @Input() articlesEnfant : Article[] = [];
    @Output() supprimerArticleEvent : EventEmitter<number> = new EventEmitter<number>();

    SupprimerArticle(id : number) : void {
        this.supprimerArticleEvent.emit(id)
    }
}
