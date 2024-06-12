import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../donkey.service';
import { Donkey } from '../donkey.model';

@Component({
  selector: 'app-user-donkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-donkey.component.html',
  styleUrls: ['./user-donkey.component.css']
})
export class UserDonkeyComponent implements OnInit {
  userDonkeys: Donkey[] = [];

  constructor(private donkeyService: DonkeyService) {}

  ngOnInit(): void {
    this.userDonkeys = this.donkeyService.getUserDonkeys();
  }
}

