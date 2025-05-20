import { Component, OnInit } from '@angular/core';
import { Citizen } from '../../model/citizen';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import { CitizenServiceService } from '../../../service/citizen-service.service';

@Component({
  selector: 'app-citizen-list',
  standalone: true,
  imports: [NgClass, NgForOf,
  NgIf],
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css']
})
export class CitizenListComponent implements OnInit {

  citizens: Citizen[] = [];

  constructor(private citizenService: CitizenServiceService) {}

  ngOnInit() {
    this.citizenService.getCitizenList().subscribe({
      next: (data) => this.citizens = data,
      error: (err) => console.error('Failed to fetch citizens:', err)
    });
  }
}
