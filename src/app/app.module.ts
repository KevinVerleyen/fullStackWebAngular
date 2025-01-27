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

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    NavBarComponent,
    HomeComponent,
    ExoBindingComponent,
    DemoPipeComponent,
    AcronymePipe,
    ListeProduitComponent
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
