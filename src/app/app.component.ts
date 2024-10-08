import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
   
  ],
  templateUrl:'app.component.html' ,
  styles: [],
})
export class AppComponent {
  title = 'sistema-votacao';
}
