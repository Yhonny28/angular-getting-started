import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
<<<<<<< HEAD
  <pm-products></pm-products>
=======
  <div>My first Component</div>
>>>>>>> master
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Managment';
}
