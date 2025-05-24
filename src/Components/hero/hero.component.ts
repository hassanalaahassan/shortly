import { Component, inject } from '@angular/core';
import { ShortLinkComponent } from "../short-link/short-link.component";
import { TranslateModule } from '@ngx-translate/core';
import { TransAppService } from '../../Services/trans-app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  translateAppService = inject(TransAppService)





}
