import { Component, Input } from '@angular/core';
import { ICard } from '../interfaces/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required:true}) cardData:ICard = {} as ICard;


}
