import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './components/demonstrations/binding/binding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
    // Redirection automatique lorsque je n'ai aucun url de charger
    {path : '', pathMatch : 'full', component : HomeComponent},
    {path : 'binding', component : BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
