import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TransAppService {

  translateService = inject(TranslateService)
  public direction:WritableSignal<string> = signal('ltr')

  constructor() {
    this.currentDir()
   }
  setDefault():void{
    this.translateService.use("en")
  }
  currentDir():void{
    this.translateService.onLangChange.subscribe(({ lang }) => {
      if (lang === 'ar') {
        this.direction.set('rtl')
        document.documentElement.dir = 'rtl';
      }
       else {
        this.direction.set('ltr')
        document.documentElement.dir = 'ltr';
      }
    });
  }
  changeLang(lang:string):void{
    this.translateService.use(lang)
    this.currentDir()
  }
}
