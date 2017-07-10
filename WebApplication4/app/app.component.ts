import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',
  template: `
<h1>DS {{title}}</h1>
<app-header></app-header>
<h2>{{hero.name}} details!</h2>
<div><label>id: </label>{{hero.id}}</div>
<div>
<label>name: </label>
<input [(ngModel)]="hero.name" placeholder="name">
</div>
<app-footer></app-footer>
`,
})
export class AppComponent  {
    title = 'Angular';
    hero: Hero = {
        id: 1,
        name: 'Zumaru'
    };
}
