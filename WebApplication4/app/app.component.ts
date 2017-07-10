import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<h1>DS {{title}}</h1>
<app-header></app-header>
<div class="row">
    <app-left-navigation></app-left-navigation>
    <app-right-content></app-right-content>
</div>
<app-footer></app-footer>
`,
})
export class AppComponent {
}
