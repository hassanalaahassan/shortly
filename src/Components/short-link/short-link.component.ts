import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShortlinkService } from '../../Services/shortlink.service';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-short-link',
  standalone: true,
  imports: [FormsModule, LoaderComponent,CommonModule],
  templateUrl: './short-link.component.html',
  styleUrl: './short-link.component.scss'
})
export class ShortLinkComponent implements OnInit,OnDestroy {


  url:string = ``
  shortUrl:string = ``
  showLoader:boolean = true
  hasError:boolean = false


  constructor(private shortLinkService:ShortlinkService){}


  ngOnInit(): void {
      this.checkLoader()
  }

  getshortUrl():void{
    if(this.url.length > 0){
      this.hasError = false
      this.shortLinkService.getShortLink(this.url)
      this.getShortLink()
    }
    else{
      this.hasError = true
    }
  }
  checkLoader():void{
    this.shortLinkService.loaderShow.subscribe((res:boolean)=>{
      this.showLoader = res
    })
  }
  getShortLink():void{
    this.shortLinkService.response.subscribe((res)=>{
      if(res.link){
        this.shortUrl = res.link
      }
    })
  }
  copyToClipboard(link:string):void{
    navigator.clipboard.writeText(link)
  }

  ngOnDestroy(): void {
    this.shortLinkService.loaderShow.unsubscribe()
  }

}
