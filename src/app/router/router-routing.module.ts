import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsComponent } from '../pages/inputs/inputs.component';
import { TemplateFormsComponent } from '../pages/template-forms/template-forms.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { PipesComponent } from '../pages/pipes/pipes.component';

const routes: Routes = [
  {path: 'inputs', component: InputsComponent},
  {path: 'templateForms', component: TemplateFormsComponent},
  {path: 'reactiveForms', component: ReactiveFormsComponent},
  {path: 'pipes', component: PipesComponent},
  { path: '', redirectTo: '/inputs', pathMatch: 'full'},
  { path: '**', redirectTo: '/inputs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
