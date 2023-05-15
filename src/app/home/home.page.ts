import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { NewsfeedService } from '../services/newsfeed.service';

const weather_API_URL = environment.WEATHER_API_URL;
const weather_API_KEY = environment.WEATHER_API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  weatherTemp: any;
  todayDate = new Date();
  cityName: any;
  articles: any;

  constructor(
    public httpClient: HttpClient,
    private newsService: NewsfeedService
  ) {
    this.weatherData();
    this.loadNews();
  }

  ngOnInit() {}


  weatherData() {
    this.httpClient
      .get(
        `${weather_API_URL}/weather?lat=${53.3546668}&lon=${-6.279672}&appid=${weather_API_KEY}`
      )
      .subscribe((results: any) => {
        this.weatherTemp = results['main'];
        this.cityName = results['name'];
      });
  }

  loadNews() {
    this.newsService
      .getNews('top-headlines?country=ie')
      .subscribe((news: any) => {
        this.articles = news['articles'];
      });
  }
}
