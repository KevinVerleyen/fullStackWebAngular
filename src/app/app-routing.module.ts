import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './components/demonstrations/binding/binding.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DemoPipeComponent } from './components/demonstrations/demo-pipe/demo-pipe.component';
import { ListeProduitComponent } from './components/exercices/liste-produit/liste-produit.component';
import { ExoBindingComponent } from './components/exercices/exo-binding/exo-binding.component';
import { ParentComponent } from './components/demonstrations/input-output/parent/parent.component';
import { ShoppingComponent } from './components/exercices/shopping-list/shopping/shopping.component';
import { LivreServiceComponent } from './components/demonstrations/livre-service/livre-service.component';
import { ShoppingListServiceComponent } from './components/exercices/shopping-list-service/shopping-list-service.component';
import { FormulaireComponent } from './components/demonstrations/formulaire/formulaire.component';
import { RoutingComponent } from './components/demonstrations/routing/routing/routing.component';
import { ProfilUserComponent } from './components/demonstrations/routing/profil-user/profil-user.component';
import { FanSerieComponent } from './components/exercices/fan-serie/fan-serie.component';
import { DetailsFanComponent } from './components/exercices/fan-serie/details-fan/details-fan.component';
import { ModifierFanComponent } from './components/exercices/fan-serie/modifier-fan/modifier-fan.component';
import { AjoutFanComponent } from './components/exercices/fan-serie/ajout-fan/ajout-fan.component';
import { SessionComponent } from './components/demonstrations/session/session.component';
import { ContactApiComponent } from './components/demonstrations/contact-api/contact-api.component';

const routes: Routes = [
    // Redirection automatique lorsque je n'ai aucun url de charger
    { path: '', pathMatch: 'full', component: HomeComponent },

    {
        path: 'demonstrations', children: [
            { path: 'binding', component: BindingComponent },
            { path: 'pipe', component: DemoPipeComponent },
            { path: 'input-output', component: ParentComponent },
            { path: 'service', component: LivreServiceComponent },
            { path: 'formulaire', component: FormulaireComponent },
            { path: 'routing', component: RoutingComponent },
            { path: 'profil/:id', component: ProfilUserComponent },
            { path: 'session', component: SessionComponent },
            { path: 'contact-api', component: ContactApiComponent }
        ]
    },

    {
        path: 'exercices', children: [
            { path: 'binding', component: ExoBindingComponent },
            { path: 'directive', component : ListeProduitComponent},
            { path: 'shopping-list', component : ShoppingComponent},
            { path: 'shopping-list-service', component : ShoppingListServiceComponent},
            { path: 'fan-serie', component : FanSerieComponent},

            { path: 'details-fan/:id', component : DetailsFanComponent},
            { path: 'ajout-fan', component : AjoutFanComponent},
            { path: 'modifier-fan/:id', component : ModifierFanComponent},

        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
