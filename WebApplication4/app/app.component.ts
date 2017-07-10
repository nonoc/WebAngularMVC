import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>DS {{title}}</h1>
<app-header></app-header>
<app-footer></app-footer>
`,
})
export class AppComponent  {
}
