import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-login',
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone:true
})
export class LoginComponent {

  authservice=inject(AuthServiceService)
  fb=inject(FormBuilder);
  constructor() { }

  loginForm=this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  onLogin(){
    const {email, password}=this.loginForm.value;
    this.authservice.login(email as string , password as string).subscribe({
      next: user => console.log(user),
      error: err => console.log(err)
    });
  }

}
