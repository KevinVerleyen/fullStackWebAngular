import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './components/demonstrations/binding/binding.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FormsModule } from '@angular/forms';
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
    AffichageLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
