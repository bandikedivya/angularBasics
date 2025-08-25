import { Component ,ContentChild,ElementRef,TemplateRef,ViewChild, ViewContainerRef } from '@angular/core';
// Should import ViewChild  


@Component({
  selector: 'app-fourth-level',
  templateUrl: './fourth-level.component.html',
  styleUrls: ['./fourth-level.component.css']
})
export class FourthLevelComponent {

  //@View Child
//Syntax: @ViewChild("Element Reference from html") localref: type(any);

 
//@ViewChild('firstName') userfirstname: any; // should give string in single or double qoutes.

@ViewChild('firstName') userfirstname: ElementRef<any>;       // should give string in single or double qoutes.
//It will throw error for userfirstname, so should add "strictPropertyInitialization" = false; in tsconfig.json file


@ViewChild ('mgs') TextMgs : ElementRef<any>; // Ref for <p>



// Sometime, we'll give content in the <app-fourth-level> in app.component.html. So, we give reference in <app-fourth-level> and use this @ContantChild in fourth-level.component.ts;

@ContentChild('childmgs1') contentmgs1 : ElementRef<any>;
@ContentChild('childmgs2') contentmgs2 : ElementRef<any>;
@ContentChild('text3')  contentmgs3 : ElementRef<any>;

btnClick()
{
  console.log(this.TextMgs); //prints the type in console
   console.log(this.TextMgs.nativeElement.innerText); //prints the type in console
   console.log(this.userfirstname);  //prints the type in console
  console.log(`Entered Value is: ${this.userfirstname.nativeElement.value}`);  //prints the type in console
  console.log(this.contentmgs1.nativeElement.innerText);
  console.log(this.contentmgs2.nativeElement.innerText);
  console.log(this.contentmgs3.nativeElement.innerText);
}




NumberList = [1,2,3,4,5];



//When we r using ng-templete, we should use TempleteRef
@ViewChild ('tempCom',{read: TemplateRef}) tempCont: TemplateRef<any>;

//When we r using ng-container, we should use ViewContainerRef
@ViewChild('container', {read:ViewContainerRef}) container:ViewContainerRef;
//if we won't mention object{read: TemplateRef / ViewContainer} it wll throw exception.


  etnclick()
  {
    //console.log(this.tempCont);
    
     ////Using container, we will deploy template. So, we use this.container here. 
     ////This container will have insert method. Using this method, we insert this.tempCont [which is template's local variable] and add method called createEmbeddedView()

    this.container.insert(this.tempCont.createEmbeddedView(null));

    // instead of null, we can pass any value
    //this.container.insert(this.tempCont.createEmbeddedView({'firstName' : "Bandike"}));
  }
}
