import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  constructor() { }

  ngLastname : String = "";
  ngFirstname : String = "";
  ngZipCode : Number = 0;
  ngTel : String = "";
  ngEmail : String = "";
  ngLogin : String = "";
  ngPassword : String = "";
  ngPasswordCheck : String = "";

  ngOnInit(): void {
  }


  clicChange (val : String) {
    this.ngLastname = val;
  }

}
