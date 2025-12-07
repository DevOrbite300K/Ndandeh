import { Component } from '@angular/core';
import { MaterialModule } from '../../utils/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {

}
