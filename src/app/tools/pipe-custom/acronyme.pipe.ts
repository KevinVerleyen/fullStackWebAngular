import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acronyme',
  standalone: false
})
export class AcronymePipe implements PipeTransform {

    // Créer une acronyme sur base d'une phrase
    // LA LE LI
  transform(valeur : string): string {
    if(!valeur) return '';

    // "LA LE LI"
    return valeur.split(/\s+/) // Sépare ma phrase en plusieurs mots
    // [LA,LE,LI]

    .map(mot => mot.charAt(0).toUpperCase()) // Prend la première lettre et la met en majuscule
    // [L,L,L]
    .join(''); // Assemble les lettre pour fomer l'acronyme
    // LLL
  }

}
