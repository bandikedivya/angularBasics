import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*string interpolation*/
  StartDate  = '05-08-2025'
  title = 'AngularBasics';

  getStudRegisterName()
  {
    return "Conrad";
  }

  //Property databinding
  // attach the data to the property

  StudentRole  = "Student Name"
  inputType  = "checkbox";
  isDisabled = true;


  //Event Data Binding
  
  btnClick()
  {
    console.log("Button Clocked");
  }

  btnMouseOver()
  {
    console.log("Curser hovering the button");
  }


}
