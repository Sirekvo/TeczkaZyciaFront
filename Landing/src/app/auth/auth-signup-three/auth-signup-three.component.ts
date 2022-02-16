// TODO  zmiana koloru przycisku, responsywnosc, walidacja
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { NgForm }   from '@angular/forms';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-auth-signup-three',
  templateUrl: './auth-signup-three.component.html',
  styleUrls: ['./auth-signup-three.component.css']
})

/**
 * Auth Signup-three Component
 */

export class AuthSignupThreeComponent implements OnInit {
  type = 0;
  telephone: string;
  click = false;
  contactList: Array<Contact> = [];
  contact_counter = 0;
  i = 0;
  visible = 0;
  isVisible: boolean = false;
  isVisible_start: boolean = true;
  isVisible_1: boolean = false;
  isVisible_2: boolean = false;
  isVisible_3: boolean = false;
  isVisible_4: boolean = false;
  isVisible_alergy: boolean = true;
  isVisible_complete_alergy: boolean = false;
  isVisible_contact: boolean = true;
  isVisible_complete_contact: boolean = false;
  isVisible_tabs: boolean = true;
  isVisible_complete_tabs: boolean = false;
  isVisible_illness: boolean = true;
  isVisible_complete_illness: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  contact(){
    this.isVisible_start = false;
    this.isVisible_1 = !this.isVisible_1;
  }
  alergy(){
    this.isVisible_start = false;
    this.isVisible_2 = !this.isVisible_2;
  }
  tabs(){
    this.isVisible_start = false;
    this.isVisible_3 = !this.isVisible_3;
  }
  illness(){
    this.isVisible_start = false;
    this.isVisible_4 = !this.isVisible_4;
  }
  back_to_start(){
    this.isVisible_start = true;
    this.isVisible_1 = false;
    this.isVisible_2 = false;
    this.isVisible_3 = false;
    this.isVisible_4 = false;
  }
  back_to_start_complete(){
    this.isVisible_start = true;
    this.isVisible_1 = false;
    this.isVisible_contact = false;
    this.isVisible_complete_contact = true;
  }
  back_to_start_complete_2(){
    this.isVisible_start = true;
    this.isVisible_2 = false;
    this.isVisible_alergy = false;
    this.isVisible_complete_alergy = true;
  }
  back_to_start_complete_3(){
    this.isVisible_start = true;
    this.isVisible_3 = false;
    this.isVisible_tabs = false;
    this.isVisible_complete_tabs = true;
  }
  back_to_start_complete_4(){
    this.isVisible_start = true;
    this.isVisible_4 = false;
    this.isVisible_illness = false;
    this.isVisible_complete_illness = true;
  }

  onContactSubmit(form: any) {
    if (this.contact_counter < 3) {
      const contact = new Contact();
      contact.type = form.value.type;
      contact.telephone = form.value.phone;
      this.contactList.push(contact);
      this.contact_counter++;
      if(this.visible==0) {
        this.isVisible = !this.isVisible;
        this.visible++;
      }
    }
  }

  delete_row_contact(rowNumber: number){
    this.contactList.splice(rowNumber, 1);
    this.contact_counter--;
    if(this.contact_counter == 0){
      this.visible=0;
      this.isVisible = false;
    }
  }
}

class Contact{
  type: number;
  telephone: string;
}

