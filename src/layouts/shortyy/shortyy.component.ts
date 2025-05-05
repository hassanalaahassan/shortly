import { Component } from '@angular/core';
import { NavComponent } from "../../Components/nav/nav.component";
import { HeroComponent } from "../../Components/hero/hero.component";

@Component({
  selector: 'app-shortyy',
  standalone: true,
  imports: [NavComponent, HeroComponent],
  templateUrl: './shortyy.component.html',
  styleUrl: './shortyy.component.scss'
})
export class ShortyyComponent {

}
