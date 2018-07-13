import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>{{greeting}}}</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  greeting = 'hello';
  // private greeting: string;
  // constructor() {
  //   this.greeting = 'hello,Angular';
  // }
}
