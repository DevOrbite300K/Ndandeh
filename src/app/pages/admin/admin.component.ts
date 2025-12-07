import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../utils/material';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogChatComponent } from './dialog-chat/dialog-chat.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  screenWidth = window.innerWidth;

  constructor(private dialog: MatDialog) {}

  // 🔥 Met à jour la largeur quand l'utilisateur resize l'écran
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  // 🔥 Ouvre le chat de manière responsive
  ouvrirChat() {

    let dialogWidth = "400px";
    let dialogHeight = "700px";

    if (this.screenWidth <= 480) {
      // 📱 MOBILE
      dialogWidth = "90vw";
      dialogHeight = "70vh";

    } else if (this.screenWidth <= 768) {
      // 📱 TABLETTE
      dialogWidth = "70vw";
      dialogHeight = "60vh";

    } else if (this.screenWidth <= 1024) {
      // 💻 SMALL DESKTOP
      dialogWidth = "40vw";
      dialogHeight = "70vh";

    } else {
      // 🖥️ GRAND ÉCRAN
      dialogWidth = "30vw";
      dialogHeight = "60vh";
    }

    this.dialog.open(DialogChatComponent, {
      width: dialogWidth,
      height: dialogHeight
    });

  }

}
