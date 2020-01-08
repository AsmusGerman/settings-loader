import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-settings></app-settings>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    `
  ]
})
export class AppComponent {}
