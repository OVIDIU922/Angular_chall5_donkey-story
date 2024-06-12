import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../donkey.service';
import { Donkey } from '../donkey.model';

@Component({
  selector: 'app-create-donkey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.css']
})
export class CreateDonkeyComponent {
  donkeyForm: FormGroup;

  constructor(private fb: FormBuilder, private donkeyService: DonkeyService) {
    this.donkeyForm = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.donkeyForm.controls;
  }

  onSubmit(): void {
    if (this.donkeyForm.valid) {
      const newDonkey: Donkey = this.donkeyForm.value;
      this.donkeyService.addDonkey(newDonkey);
      this.donkeyForm.reset();
    }
  }
}
