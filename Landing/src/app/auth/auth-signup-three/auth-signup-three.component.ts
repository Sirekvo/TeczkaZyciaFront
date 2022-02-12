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

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  contact(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('myDropdown').style.display = 'block';
  }
  back_to_start(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('myDropdown').style.display = 'none';
  }
  back_to_start_complete(){
    document.getElementById('first').style.display = 'block';
    document.getElementById('myDropdown').style.display = 'none';
    document.getElementById('first_contact').style.display = 'none';
    document.getElementById('complete_contact').style.display = 'block';
  }
}
