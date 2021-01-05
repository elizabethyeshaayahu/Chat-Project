import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchContactComponent } from './components/search-contact/search-contact.component';



@NgModule({
  declarations: [
    SideBarComponent,
    ContactComponent,
    SearchContactComponent]
    ,
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class ContactsBarModule { }
