//TODO usuwanie, pojawianie sie tabeli po kliknieciu dodaj, zmiana koloru przycisku, responsywnosc, 
//pojawianie sie i znikanie konkretnych divow
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-auth-signup-three',
  templateUrl: './auth-signup-three.component.html',
  styleUrls: ['./auth-signup-three.component.css']
})

/**
 * Auth Signup-three Component
 */

export class AuthSignupThreeComponent implements OnInit {
  type: number=0;
  telephone: string;
  click: boolean=false;
  contactList: Array<Contact> = [];
  contact_counter=0; 
  i=0;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  contact(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_1').style.display = 'block';
    // console.log("we cos wypisz");
  }
  alergy(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_2').style.display = 'block';
  }
  tabs(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_3').style.display = 'block';
  }
  illness(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_4').style.display = 'block';
  }
  back_to_start(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_1').style.display = 'none';
    document.getElementById('hidden_2').style.display = 'none';
    document.getElementById('hidden_3').style.display = 'none';
    document.getElementById('hidden_4').style.display = 'none';
  }
  back_to_start_complete(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_1').style.display = 'none';
    document.getElementById('first_contact').style.display = 'none';
    document.getElementById('complete_contact').style.display = 'block';
  }
  back_to_start_complete_2(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_2').style.display = 'none';
    document.getElementById('alergy').style.display = 'none';
    document.getElementById('complete_alergy').style.display = 'block';
  }
  back_to_start_complete_3(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_3').style.display = 'none';
    document.getElementById('tabs').style.display = 'none';
    document.getElementById('complete_tabs').style.display = 'block';
  }
  back_to_start_complete_4(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_4').style.display = 'none';
    document.getElementById('illness').style.display = 'none';
    document.getElementById('complete_illness').style.display = 'block';
  }

  onContactSubmit(form: any) {
    if(this.contact_counter <3) {
      let contact = new Contact();
      contact.type=form.value.type;
      contact.telephone=form.value.phone;
      this.contactList.push(contact);
      this.contact_counter++;
      this.telephone="";
      console.log("Wartosc z formularza telefon "+ form.value.phone);
      console.log("Wartosc z formularza typ "+ form.value.type);
      // this.type=0;
    }
    else if(this.contact_counter >3){
      form.push.disable();
    }
    
  }
  
  checkValid(form: any){
    if(form.value.type!=0 && form.value.phone!=0){
      this.click=true;
    }
    else{
      this.click=false;
    }
  }
}

function delete_row(): (this: HTMLButtonElement, ev: MouseEvent) => any {
  throw new Error('dziala.');
}
class Contact{
  type: number;
  telephone: string;
}

