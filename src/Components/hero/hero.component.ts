import { Component } from '@angular/core';
import { ShortLinkComponent } from "../short-link/short-link.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ShortLinkComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
