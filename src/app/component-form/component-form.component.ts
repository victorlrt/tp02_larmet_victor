import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  constructor() { }

  lastname : String = "";
  firstname : String = "";
  zipCode : Number = 0;
  tel : String = "";
  email : String = "";
  login : String = "";
  password : String = "";
  passwordCheck : String = "";

  ngOnInit(): void {
  }


  clic () {
  }

}
