import { Component } from '@angular/core';
import { ShortLinkComponent } from "../short-link/short-link.component";
import { CardComponent } from "../../shared/card/card.component";
import { ICard } from '../../shared/interfaces/card';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [ShortLinkComponent, CardComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

  cardsData:ICard[] = [
    {
      title:'Brand Recognition',
      icon:'images/icon-brand-recognition.svg',
      text:'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
    },
    {
      title:'Detailed Records',
      icon:'images/icon-detailed-records.svg',
      text:'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      title:'Fully Customizable',
      icon:'images/icon-fully-customizable.svg',
      text:'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ]

}
