import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ValidateEqualModule} from "ng-validate-equal";

import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ValidateEqualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
