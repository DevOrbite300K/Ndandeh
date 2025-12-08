import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  imports: [MaterialModule, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
  standalone: true
})
export class AccueilComponent {

}
