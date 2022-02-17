// TODO  zmiana koloru przycisku
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { NgForm } from '@angular/forms';
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
  activeToggle = 0;
  click = false;
  contactList: Array<Contact> = [];
  alergyList: Array<Alergy> = [];
  contact_counter = 0;
  alergy_counter = 0;
  i = 0;
  visible = 0;
  isVisible_table_contact = false;
  isVisible_table_alergy = false;
  isVisible_start = true;
  isVisible_1 = false;
  isVisible_2 = false;
  isVisible_3 = false;
  isVisible_4 = false;
  isVisible_alergy = true;
  isVisible_complete_alergy = false;
  isVisible_contact = true;
  isVisible_complete_contact = false;
  isVisible_tabs = true;
  isVisible_complete_tabs = false;
  isVisible_illness = true;
  isVisible_complete_illness = false;
  constructor() { }

  ngOnInit(): void {
  }

  contact(){
    this.isVisible_start = false;
    this.isVisible_1 = !this.isVisible_1;
    this.activeToggle = 0;
  }
  alergy(){
    this.isVisible_start = false;
    this.isVisible_2 = !this.isVisible_2;
  }
  tabs(){
    this.isVisible_start = false;
    this.isVisible_3 = !this.isVisible_3;
    this.activeToggle = 0;
  }
  illness(){
    this.isVisible_start = false;
    this.isVisible_4 = !this.isVisible_4;
    this.activeToggle = 0;
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
      if (this.visible == 0) {
        this.isVisible_table_contact = !this.isVisible_table_contact;
        this.visible++;
      }
    }
  }

  delete_row_contact(rowNumber: number){
    this.contactList.splice(rowNumber, 1);
    this.contact_counter--;
    if (this.contact_counter == 0){
      this.visible = 0;
      this.isVisible_table_contact = false;
    }
  }
  onAlergySubmit(form: any) {
    if (this.alergy_counter < 15) {
      const alergy = new Alergy();
      alergy.type = form.value.type2;
      alergy.name = form.value.name;
      this.alergyList.push(alergy);
      this.alergy_counter++;
      if (this.visible == 0) {
        this.isVisible_table_alergy = !this.isVisible_table_alergy;
        this.visible++;
      }
    }
  }
  delete_row_alergy(rowNumber: number){
    this.alergyList.splice(rowNumber, 1);
    this.alergy_counter--;
    if (this.alergy_counter == 0){
      this.visible = 0;
      this.isVisible_table_alergy = false;
    }
  }
  checkSelected(selectedChoice: number){
    this.activeToggle = selectedChoice;
  }
}

class Contact{
  type: number;
  telephone: string;
}

export class Alergy{
  type: number;
  name: string;
}


