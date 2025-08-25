import { Component } from '@angular/core';

@Component({
  selector: 'app-second-level',
  templateUrl: './second-level.component.html',
  styleUrls: ['./second-level.component.css']
})
export class SecondLevelComponent {

  //ngStyle
FirstelementColor = 'plum';
FontSize = '30px';

CourseDetails = "Welcome To Angular Training ";


ChangeColor()
{
  this.FirstelementColor = 'green';
}

resetColor()
{
  this.FirstelementColor = "gray";
}
Clickelement()
{
  this.FirstelementColor = "blue";
}



  buttonColor = 'blue';


  completedTask1 = true;



changePara()
{
  //this.completedTask1 = true;
  this.completedTask1 = !this.completedTask1;
  console.log(this.completedTask1);

  setInterval(() => {
  this.completedTask1 = !this.completedTask1;
}, 1000);

  // setTimeout(()=> {
  //   this.completedTask1 = !this.completedTask1;
  // }, 2000);
}





}
