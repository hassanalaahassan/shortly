import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TransAppService } from './../Services/trans-app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'short-app';
  translateAppService = inject(TransAppService)

  ngOnInit(): void {
    this.translateAppService.setDefault()
  }

}
