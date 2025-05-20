import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CitizenListComponent} from './citizen/component/citizen-list/citizen-list.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CitizenListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smart-municipality-angular-ui';
}
