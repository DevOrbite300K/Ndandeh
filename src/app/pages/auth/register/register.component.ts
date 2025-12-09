import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../services/auth-service.service';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone:true
})
export class RegisterComponent implements OnInit {


  accountFormGroup!: FormGroup;
  profileFormGroup!: FormGroup;
  authservice = inject(AuthServiceService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.profileFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  submit() { 

    if (this.accountFormGroup.valid && this.profileFormGroup.valid) {
      const data = {
        ...this.accountFormGroup.value,
        ...this.profileFormGroup.value
      };
      
    }
  }

  message:string="";
  isSubmitting = false;

    inscription() {
        if (this.accountFormGroup.invalid || this.profileFormGroup.invalid) return;

        this.isSubmitting = true;
        const user = { ...this.accountFormGroup.value, ...this.profileFormGroup.value };

        this.authservice.register(user).subscribe({
          next: response => {
            this.message = "Inscription réussie!";
            this.isSubmitting = false;
          },
          error: err => {
            this.message = "Erreur lors de l'inscription.";
            this.isSubmitting = false;
          }
        });
    }


}
