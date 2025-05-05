import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isNavVisable:WritableSignal<boolean> = signal(false);
  toggleNav():void{
    this.isNavVisable.update(()=>!this.isNavVisable())
  }

}
