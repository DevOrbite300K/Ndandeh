import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  standalone: true
})
export class ContactComponent {

  email="bdjouma37@gmail.com"

}
