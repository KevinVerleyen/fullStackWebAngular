import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  standalone: false,

  templateUrl: './demo-pipe.component.html',
  styleUrl: './demo-pipe.component.scss'
})
export class DemoPipeComponent {
titre : string = "Développement web et mobile";

    personne = {
        nomUtilisateur : "John Doe",
        dateActelle : new Date(),
        salaire :1700,
        tauxReduction :0.25
    }
}