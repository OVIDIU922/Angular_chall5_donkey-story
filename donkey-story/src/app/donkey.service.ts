import { Injectable } from '@angular/core';
import { Donkey } from './donkey.model';

@Injectable({
  providedIn: 'root'
})
export class DonkeyService {
  private donkeys: Donkey[] = [];
  private userDonkeys: Donkey[] = [];

  getDonkeys(): Donkey[] {
    return this.donkeys;
  }

  addDonkey(donkey: Donkey): void {
    this.donkeys.push(donkey);
  }

  adoptDonkey(donkey: Donkey): void {
    this.userDonkeys.push(donkey);
    this.donkeys = this.donkeys.filter(d => d !== donkey);
  }

  getUserDonkeys(): Donkey[] {
    return this.userDonkeys;
  }
}
