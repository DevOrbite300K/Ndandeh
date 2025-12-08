import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fonctionnalite',
  imports: [MaterialModule, CommonModule],
  templateUrl: './fonctionnalite.component.html',
  styleUrl: './fonctionnalite.component.scss',
  standalone: true
})
export class FonctionnaliteComponent {
  

}
