import { Component } from '@angular/core';
import { MaterialModule } from '../../../utils/material';
import { ContactComponent } from '../contact/contact.component';
import { FonctionnaliteComponent } from '../fonctionnalite/fonctionnalite.component';

@Component({
  selector: 'app-aide',
  imports: [MaterialModule, ContactComponent, FonctionnaliteComponent ],
  templateUrl: './aide.component.html',
  styleUrl: './aide.component.scss',
  standalone:true
})
export class AideComponent {

}
