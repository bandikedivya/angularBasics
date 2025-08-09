import { Component } from '@angular/core';

@Component({
  selector: 'app-firstlevel',
  templateUrl: './firstlevel.component.html',
  styleUrls: ['./firstlevel.component.css']
})
export class FirstlevelComponent {
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
    console.log("Button Clicked");
  }

  btnMouseOver(event : any)
  {
    //console.log("Curser hovering the button");
    console.log(event);

    let element = event.target as HTMLButtonElement;
  }

  // should mention the type, like any[when we don't know thw specific type, we mention any]
captureData(eventDetails : KeyboardEvent)
{

  //console.log("Capturing entering words");
  console.log(eventDetails);
 // console.log(eventDetails.target.value);
  let element = eventDetails.target as HTMLInputElement;
  let data = element.value
  console.log(data);

if(data == "Conrad")
{
// document.writeln("Already Registered");
console.log("Already Registered, Please Login Through Credentials");
}

}
// captureData()
// {

//   console.log("Capturing entering words");
  
// }

// For event and property binding

placeholdervalue = "Enter Your Mobile Number";

Course = "Please Select Course";

//sName = "Swapna";

//isChecked = !true; //false

isChecked = !false; //true

selectedvalue = 4;


dropvaluechange()
{
  console.log("Value Changed");
}

modelChange($event:any)
{
  console.log($event);
}


// Two way Data Binding

// RegisteredCourse = "Angular";

RegisteredCourse = "Angular";

}

