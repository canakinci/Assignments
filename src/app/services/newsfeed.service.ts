import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const newsAPI_URL = environment.NEWS_API_URL;
const newsAPI_KEY = environment.NEWS_API_KEY;

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http:HttpClient) { }

  getNews(url: any){
    return this.http.get(`${newsAPI_URL}/${url}&apiKey=${newsAPI_KEY}`)
  }
}
