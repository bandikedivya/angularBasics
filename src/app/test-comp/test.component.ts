
import { Component } from "@angular/core";

// Component works like namespace here. "@angular/core" is the one package from package list(package.json).
// Should give this TestComponent as component. So, that angular will understand that this component exist and will use this component.


// To take this component features, we should add import(metioned above)

// Adding component -> Html + Css along with name
// selector - keyword used to give name[Here 'app-test-component' is the name for this component]
// templateUrl - for html[ "." -  represents the "test-comp" folder]
// styleUrls - for css

@Component({
    selector    : 'app-test-comp',
    templateUrl : './test.component.html',
    styleUrls   : ['./test.component.css']
})
    

// css
export class TestComponent {

}