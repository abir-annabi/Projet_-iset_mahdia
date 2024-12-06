import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  imports:[ReactiveFormsModule, CommonModule],
  standalone:true,
  
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.inscriptionForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]], // Validation nom
      surname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]], // Validation prénom
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/), // Validation mot de passe
        ],
      ],
    });
  }

  // Fonction pour valider le formulaire
  validateForm(): void {
    if (this.inscriptionForm.valid) {
      const { name, surname } = this.inscriptionForm.value;
      this.router.navigate(['/home'], {
        queryParams: { name, surname },
      });
    } else {
      alert('Veuillez vérifier vos informations.');
    }
  }
}
