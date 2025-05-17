import { Component } from '@angular/core';
import {Citizen} from '../../model/citizen';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-citizen-list',
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './citizen-list.component.html',
  styleUrl: './citizen-list.component.css'
})
export class CitizenListComponent {

  citizens: Citizen[] = [];

}
