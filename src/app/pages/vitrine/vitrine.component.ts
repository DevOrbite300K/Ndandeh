import { Component, HostListener } from '@angular/core';
import { MaterialModule } from '../../utils/material';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogChatComponent } from '../admin/dialog-chat/dialog-chat.component';

@Component({
  selector: 'app-vitrine',
  imports: [MaterialModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {

  screenWidth = window.innerWidth;

  constructor(private matdialog: MatDialog) {}

  // 🔥 Mise à jour auto de la largeur de l'écran
  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }

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
      // 🖥️ GRAND ÉCRAN —> Tu veux 60% largeur & 70% hauteur
      dialogWidth = "60vw";   // <<<<<<<<<<<<<<<< ajouté
      dialogHeight = "70vh";  // <<<<<<<<<<<<<<<< ajouté
    }

    this.matdialog.open(DialogChatComponent, {
      width: dialogWidth,
      height: dialogHeight
    });

  }

}
