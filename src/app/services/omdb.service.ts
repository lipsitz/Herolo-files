import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StoreService } from './store/store.service'
import { IVideo } from '../models/video.model'

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  videos: IVideo[] = []
  movieNamesArray =
    ['The Sum of All Fears', 'Run All Night', 'Frozen', 'The Lion King', 'The Last Samurai', 'The Kids Are All Right', 'Inception', 'All About Eve']
  constructor(private http: HttpClient, private store: StoreService) { }

  fromApiToStore() {
    let url = 'https://www.omdbapi.com/?apikey=2b17fbae&t=';
    this.movieNamesArray.forEach(title => {
      this.http.get(url + title).subscribe((res) => {
        this.store.addVideoToStore(res);
      })
    });
  }
}



