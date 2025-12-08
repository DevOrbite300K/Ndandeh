import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-savoir-plus',
  imports: [MaterialModule, CommonModule],
  templateUrl: './savoir-plus.component.html',
  styleUrl: './savoir-plus.component.scss',
  standalone: true
})
export class SavoirPlusComponent {

}
