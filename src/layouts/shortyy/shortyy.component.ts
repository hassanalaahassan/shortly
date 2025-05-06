import { Component } from '@angular/core';
import { NavComponent } from "../../Components/nav/nav.component";
import { HeroComponent } from "../../Components/hero/hero.component";
import { ShortLinkComponent } from "../../Components/short-link/short-link.component";
import { StatisticsComponent } from "../../Components/statistics/statistics.component";

@Component({
  selector: 'app-shortyy',
  standalone: true,
  imports: [NavComponent, HeroComponent, StatisticsComponent],
  templateUrl: './shortyy.component.html',
  styleUrl: './shortyy.component.scss'
})
export class ShortyyComponent {

}
