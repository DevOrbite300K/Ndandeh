import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../utils/material';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-auth',
    imports: [RouterOutlet, MaterialModule, CommonModule],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    standalone:true
})
export class AuthComponent {

}
