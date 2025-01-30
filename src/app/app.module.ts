import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/demonstrations/binding/binding.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoBindingComponent } from './components/exercices/exo-binding/exo-binding.component';
import { DemoPipeComponent } from './components/demonstrations/demo-pipe/demo-pipe.component';
import { AcronymePipe } from './tools/pipe-custom/acronyme.pipe';
import { ListeProduitComponent } from './components/exercices/liste-produit/liste-produit.component';
import { ParentComponent } from './components/demonstrations/input-output/parent/parent.component';
import { EnfantComponent } from './components/demonstrations/input-output/enfant/enfant.component';
import { ShoppingComponent } from './components/exercices/shopping-list/shopping/shopping.component';
import { AjoutComponent } from './components/exercices/shopping-list/ajout/ajout.component';
import { AffichageComponent } from './components/exercices/shopping-list/affichage/affichage.component';
import { LivreServiceComponent } from './components/demonstrations/livre-service/livre-service.component';
import { AffichageLivreComponent } from './components/demonstrations/livre-service/affichage-livre/affichage-livre.component';
import { ShoppingListServiceComponent } from './components/exercices/shopping-list-service/shopping-list-service.component';
import { FormulaireComponent } from './components/demonstrations/formulaire/formulaire.component';
import { RoutingComponent } from './components/demonstrations/routing/routing/routing.component';
import { ProfilUserComponent } from './components/demonstrations/routing/profil-user/profil-user.component';
import { FanSerieComponent } from './components/exercices/fan-serie/fan-serie.component';
import { AjoutFanComponent } from './components/exercices/fan-serie/ajout-fan/ajout-fan.component';
import { DetailsFanComponent } from './components/exercices/fan-serie/details-fan/details-fan.component';
import { ModifierFanComponent } from './components/exercices/fan-serie/modifier-fan/modifier-fan.component';
import { ListeFanComponent } from './components/exercices/fan-serie/liste-fan/liste-fan.component';
import { SessionComponent } from './components/demonstrations/session/session.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ContactApiComponent } from './components/demonstrations/contact-api/contact-api.component';

@NgModule({
    declarations: [
        AppComponent,
        BindingComponent,
        NavBarComponent,
        HomeComponent,
        ExoBindingComponent,
        DemoPipeComponent,
        AcronymePipe,
        ListeProduitComponent,
        ParentComponent,
        EnfantComponent,
        ShoppingComponent,
        AjoutComponent,
        AffichageComponent,
        LivreServiceComponent,
        AffichageLivreComponent,
        ShoppingListServiceComponent,
        FormulaireComponent,
        RoutingComponent,
        ProfilUserComponent,
        FanSerieComponent,
        AjoutFanComponent,
        DetailsFanComponent,
        ModifierFanComponent,
        ListeFanComponent,
        SessionComponent,
        ContactApiComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()) // => Utilisation du module httpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
