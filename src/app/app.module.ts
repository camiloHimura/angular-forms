import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterRoutingModule } from './router/router-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { TemplateFormsComponent } from './pages/template-forms/template-forms.component';
import { PropertyEventComponent } from './components/property-event/property-event.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';
import { MiloValidatorDirective } from './milo-validator.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { CamiloPipe } from './pipes/camilo.pipe';
import { AsyncPipe } from './pipes/async.pipe';
import { SanitizationPipe } from './pipes/sanitization.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PropertyEventComponent,
    TemplateReferenceVariableComponent,
    InputsComponent,
    TemplateFormsComponent,
    MiloValidatorDirective,
    ReactiveFormsComponent,
    PipesComponent,
    CamiloPipe,
    AsyncPipe,
    SanitizationPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
