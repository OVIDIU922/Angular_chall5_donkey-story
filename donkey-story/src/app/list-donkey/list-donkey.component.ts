import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../donkey.service';
import { Donkey } from '../donkey.model';

@Component({
  selector: 'app-list-donkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-donkey.component.html',
  styleUrls: ['./list-donkey.component.css']
})
export class ListDonkeyComponent implements OnInit {
  donkeys: Donkey[] = [];
  selectedDonkey: Donkey | null = null;

  constructor(private donkeyService: DonkeyService) {}

  ngOnInit(): void {
    this.donkeys = this.donkeyService.getDonkeys();
  }

  adoptDonkey(donkey: Donkey): void {
    this.donkeyService.adoptDonkey(donkey);
  }

  showDetails(donkey: Donkey): void {
    this.selectedDonkey = donkey;
  }

  hideDetails(): void {
    this.selectedDonkey = null;
  }
}

