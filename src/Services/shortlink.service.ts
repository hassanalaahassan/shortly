import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILinkData } from '../shared/interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class ShortlinkService {

  private bitlyToken = 'e51b785d696cdbb02e87249d11c6c238a7d4409c';
  loaderShow:BehaviorSubject<boolean> = new BehaviorSubject(false)
  response:BehaviorSubject<ILinkData> = new BehaviorSubject<ILinkData>({} as ILinkData)

  constructor(private httpClient: HttpClient) {}

  postShortLink(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.bitlyToken}`
    });
    const body = {
      long_url: url,
      domain: 'bit.ly'
    };
    return this.httpClient.post<any>('https://api-ssl.bitly.com/v4/shorten', body, { headers });
  }
  getShortLink(url: string){
    this.loaderShow.next(true)
    this.postShortLink(url).subscribe({
      next:(response:ILinkData)=>{
        this.response.next(response)
        this.loaderShow.next(false)
      },
      error:(err)=>{
        this.loaderShow.next(false)
      }
    })
  }

}
