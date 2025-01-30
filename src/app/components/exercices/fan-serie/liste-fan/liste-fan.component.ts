import { Component } from '@angular/core';
import { Fan } from '../../../../models/fan-serie.model';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-fan',
  standalone: false,

  templateUrl: './liste-fan.component.html',
  styleUrl: './liste-fan.component.scss'
})
export class ListeFanComponent {
    fans : Fan[] = [];

    constructor(
        private _fanService : FanSerieService,
        private _router : Router
    ){}

    ngOnInit(): void {
        this.fans = this._fanService.RecupererToutLesFan();
    }

    Details(id : number | undefined) : void {
        this._router.navigate(['/exercices/details-fan', id])
    }
}
