import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<h1>DS {{title}}</h1>
<app-header></app-header>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
    Left Component
    </div>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
    Right Component
</div>
</div>
<app-footer></app-footer>
`,
})
export class AppComponent {
}
