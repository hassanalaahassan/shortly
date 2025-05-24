import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TransAppService } from '../../Services/trans-app.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  translateAppService = inject(TransAppService)

  isNavVisable:WritableSignal<boolean> = signal(false);
  toggleNav():void{
    this.isNavVisable.update(()=>!this.isNavVisable())
  }

  setNewLang(event:boolean){
    event ? this.translateAppService.changeLang('ar') : this.translateAppService.changeLang('en')
  }

}
