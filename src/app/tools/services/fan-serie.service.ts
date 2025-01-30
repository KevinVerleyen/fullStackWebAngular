import { Injectable } from '@angular/core';
import { Fan } from '../../models/fan-serie.model';

@Injectable({
    providedIn: 'root'
})
export class FanSerieService {

    private _fans : Fan[] = [
        {
            Id : 1,
            Nom : "Toto",
            DateNaissance : new Date('1985-03-12'),
            Series : ['One punch Man','Punisher']
        }
    ];

    // CRUD

    // Get All
    RecupererToutLesFan() : Fan[]{
        return this._fans;
    }

    // Get One
    RecupererFan(id : number) : Fan | undefined{
        const fan = this._fans.find(fan => fan.Id === id);
        console.log(this._fans);
        console.log(fan);
        return fan;
    }

    // Create
    AjouterFan(fan : Fan) : void {
        fan.Id = this._fans.length +1;
        this._fans.push(fan)
    }

    // Update
    MiseAjourFan(fan : Fan) : void {
        const index = this._fans.findIndex(fan => fan.Id === fan.Id);
        fan.Id = index+1;
        this._fans[index] = fan;
        console.log(this._fans[index]);
    }

    // Delete
    SupprimerFan(fan : Fan) : void {
        if (fan){
            const index = this._fans.findIndex(fan => fan.Id === fan.Id);
            this._fans.splice(index, 1);
        }
    }

    FanExiste(nom : string) : boolean {
        return this._fans.some(fan => fan.Nom.toLowerCase() === nom.toLowerCase());
    }

}