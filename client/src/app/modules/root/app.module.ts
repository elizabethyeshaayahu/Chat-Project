import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsBarModule } from '../contacts-bar/contacts-bar.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactsBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
