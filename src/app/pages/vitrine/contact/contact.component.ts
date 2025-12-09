import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone:true
})
export class ContactComponent {

  email: string = 'bdjouma37@gmail.com';
}
