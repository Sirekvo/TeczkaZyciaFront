import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-signup-three',
  templateUrl: './auth-signup-three.component.html',
  styleUrls: ['./auth-signup-three.component.css']
})

/**
 * Auth Signup-three Component
 */

export class AuthSignupThreeComponent implements OnInit {

  i=0;
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  contact(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_1').style.display = 'block';
  }
  alergy(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('hidden_2').style.display = 'block';
  }
  back_to_start(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('hidden_1').style.display = 'none';
    document.getElementById('hidden_2').style.display = 'none';
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
        document.getElementById('5').innerHTML = (<HTMLInputElement>document.getElementById('family')).value;
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
}
