import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule
  ],
  templateUrl:'app.component.html' ,
  styles: [],
})
export class AppComponent {
  title = 'sistema-votacao';
}
