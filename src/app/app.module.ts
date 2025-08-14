import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestComponent} from './test-comp/test.component' //not required to give extensions.
import { FormsModule } from '@angular/forms';
import { FirstlevelComponent } from './firstlevel/firstlevel.component';
import { SecondLevelComponent } from './second-level/second-level.component';
import { ThirdlevelComponent } from './thirdlevel/thirdlevel.component';
import { FourthLevelComponent } from './fourth-level/fourth-level.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstlevelComponent,
    SecondLevelComponent,
    ThirdlevelComponent,
    FourthLevelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
