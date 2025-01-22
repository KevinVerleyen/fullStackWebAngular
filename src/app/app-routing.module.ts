import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './components/demonstrations/binding/binding.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ExoBindingComponent } from './components/exercices/exo-binding/exo-binding.component';
import { DemoPipeComponent } from './components/demonstrations/demo-pipe/demo-pipe.component';

const routes: Routes = [
    // Redirection automatique lorsque je n'ai aucun url de charger
    { path: '', pathMatch: 'full', component: HomeComponent },

    {
        path: 'demonstrations', children: [
            { path: 'binding', component: BindingComponent },
            { path: 'pipe', component: DemoPipeComponent },
        ]
    },

    {
        path: 'exercices', children: [
            { path: 'binding', component: ExoBindingComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
