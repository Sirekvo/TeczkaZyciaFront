import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ContactClass } from './contactClass';

@Component({
  selector: 'app-auth-signup-three',
  templateUrl: './auth-signup-three.component.html',
  styleUrls: ['./auth-signup-three.component.css']
})

/**
 * Auth Signup-three Component
 */

export class AuthSignupThreeComponent implements OnInit {
  type: number;
  telephone: string;
  contactList: Array<ContactClass> = [];

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

  fill_table() {
    this.i++;
    if(this.i==1){
      document.getElementById('1').innerHTML = "1";
      if ((<HTMLInputElement>document.getElementById('family')).checked) {
        document.getElementById('2').innerHTML = (<HTMLInputElement>document.getElementById('family')).value;
      }
      else if((<HTMLInputElement>document.getElementById('friend')).checked) {
        document.getElementById('2').innerHTML = (<HTMLInputElement>document.getElementById('friend')).value;
      }
      document.getElementById('3').innerHTML = (<HTMLInputElement>document.getElementById('phone')).value;
    }
    else if(this.i==2){

      document.getElementById('4').innerHTML = "2";
      if ((<HTMLInputElement>document.getElementById('family')).checked) {
        document.getElementById('5').innerHTML =(<HTMLInputElement>document.getElementById('family')).value;
      }
      else if((<HTMLInputElement>document.getElementById('friend')).checked) {
        document.getElementById('5').innerHTML = (<HTMLInputElement>document.getElementById('friend')).value;
      }
      document.getElementById('6').innerHTML = (<HTMLInputElement>document.getElementById('phone')).value;
    }
    else if(this.i==3){
      document.getElementById('7').innerHTML = "3";
      if ((<HTMLInputElement>document.getElementById('family')).checked) {
        document.getElementById('8').innerHTML = (<HTMLInputElement>document.getElementById('family')).value;
      }
      else if((<HTMLInputElement>document.getElementById('friend')).checked) {
        document.getElementById('8').innerHTML = (<HTMLInputElement>document.getElementById('friend')).value;
      }
      document.getElementById('9').innerHTML = (<HTMLInputElement>document.getElementById('phone')).value;
    }
  }

  // delete_row_contact(){
  //   console.log("Funcka sie uruchomila");
  //   // this.contactList.splice(index_del, 1);
  //   // this.newCreateTable();
  //   // console.log("pelna lista obiektow po usunieciu");
  //   // for(let j=0;j<this.contactList.length;j++){
  //   //   console.log("typ elementu "+j+" : " + this.contactList[j].type);
  //   //   console.log("telefon elementu "+j+" : " + this.contactList[j].telephone);
  //   // }
  // }
  
  delete_row_contact(){
    console.log("Funkcja sie uruchomila");
    // this.contactList.splice(index_del, 1);
    // this.newCreateTable();
    // console.log("pelna lista obiektow po usunieciu");
    // for(let j=0;j<this.contactList.length;j++){
    //   console.log("typ elementu "+j+" : " + this.contactList[j].type);
    //   console.log("telefon elementu "+j+" : " + this.contactList[j].telephone);
    // }
  }

  newCreateTable(){
    let button_contact:HTMLButtonElement=<HTMLButtonElement>document.createElement("button");
    button_contact.innerText = "Usun";
    //button_contact.onclick= () => this.delete_row_contact();

    //button_contact.onclick =delete_row_contact;
    var mytable = `<table class='table mb-0 table-center' >
    <thead>
      <tr>
        <th scope=col>#</th>
        <th scope='col'>Kto</th>
        <th scope='col'>Numer telefonu</th>
      </tr>
    </thead>
    <tbody>
      <tr>`;
    for(let n=0;n<this.contactList.length;n++){
      var typeInner:string;
      if(this.contactList[n].type==1){
        typeInner="Rodzina";
      }
      else if(this.contactList[n].type==2){
        typeInner="Znajomy";
      }
        mytable+="<th scope='row'>"+(n+1)+"</th><td>"+typeInner+"</td><td>"+this.contactList[n].telephone+"</td></tr>"
        // document.scripts[document.scripts.length -1 ].appendChild(button_contact.onclick= delete_row_contact).outerHTML + " </td></tr>";
   
          //mytable+="<th scope='row'>"+(n+1)+"</th><td>"+typeInner+"</td><td>"+this.contactList[n].telephone+"</td>" + "<td>" + button_contact.outerHTML + "</td></tr>";
          
        //  var button_contact= document.querySelector("#usun_test");
    
    
    // button_contact.addEventListener("click", function(){
      // console.log("Dziala");
    // });
    }
    mytable+="</tbody></table>";
    document.getElementById("contactTable").innerHTML = mytable;
  }

  onContactCreate(){
    let customObj = new ContactClass();
    if ((<HTMLInputElement>document.getElementById('family')).checked) {
      customObj.type=1;
    }
    else if((<HTMLInputElement>document.getElementById('friend')).checked) {
      customObj.type=2;
    }
    // customObj.type=1;
    customObj.telephone=(<HTMLInputElement>document.getElementById('phone')).value;
    this.contactList.push(customObj);
    this.type = 0;
    this.telephone="";
    console.log("pelna lista obiektow");
    for(let j=0;j<this.contactList.length;j++){
      console.log("typ elementu "+j+" : " + this.contactList[j].type);
      console.log("telefon elementu "+j+" : " + this.contactList[j].telephone);
      this.delete_row_contact();
    }
    // console.log("typ: " + customObj.type );
    // console.log("numer: " + customObj.telephone );
    // console.log("cos sie wyswielta");
  }
}


function delete_row(): (this: HTMLButtonElement, ev: MouseEvent) => any {
  throw new Error('dziala.');
}

