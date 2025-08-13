import { Component } from '@angular/core';

@Component({
  selector: 'app-third-level',
  templateUrl: './thirdlevel.component.html',
  styleUrls: ['./thirdlevel.component.css']
})


export class ThirdlevelComponent {

  checkEligibility = false;

  //If we use any type, we won't get any intelligence(like properties.)
  // Clickbtn(element : any)
  // {
  //    console.log(element); //we'll get <p and content>
  // }


  output = "";
  // If we give specific element type, we will get intelligence(like properties.)
  Clickbtn(element : HTMLParagraphElement)
  {
     //console.log(element);
     console.log(element.innerText);  //we'll get only the text in the paragraph
  

  // I gave wrong text in the if condition, so it goes to the else block and prints else condition
  if(element.innerText == "Click Submit Button to View the Password")
  {
    //console.log("Password Has Updated Successfully!!");
    this.output = "Password Has Updated Successfully!!";
  }
  else 
  {
    //console.log("Error Occured. Please Try After Sometime");
    this.output = "Error Occured. Please Try After Sometime";
  }
}

 Content = ["Minimum Percentage/CGPA: Candidate should have a minimum of 60% or 6.0 CGPA in 10th, 12th, and undergraduate degrees.",
    "No Active Backlogs: Candidates with No Active Backlogs.",
    "No Gaps in Education: No Gaps in Candidate's Academic Record."
  ];


  defaultname = 1;
 StudentsList = ["Adam", "Isabel", "Conrad"];


 selectName = 0;

EvtSelName()
{
  this.defaultname = this.selectName;
}

// Collection of object [type: Object]
DefaultCandidate = "CSE20";


HeaderContent = ["Student ID", "Student Name"];
SList = [
  {SId: 'CSE10' , SName: "Jermiah Fisher"},
  {SId: 'CSE20' , SName: "Conrad Fisher"},
  {SId: 'CSE30' , SName: "Susanah Fisher"},
];

stuid = 0;

}
