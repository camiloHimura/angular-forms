import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsComponent } from '../pages/inputs/inputs.component';
import { TemplateFormsComponent } from '../pages/template-forms/template-forms.component';

const routes: Routes = [
  {path: 'inputs', component: InputsComponent},
  {path: 'templateForms', component: TemplateFormsComponent},
  { path: '', redirectTo: '/inputs', pathMatch: 'full'},
  { path: '**', redirectTo: '/inputs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
