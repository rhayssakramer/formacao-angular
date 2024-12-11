import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeiroComponentComponent} from './primeiro-component/primeiro-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-component';
}
