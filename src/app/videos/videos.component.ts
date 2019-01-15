import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store/store.service'
import { OmdbService } from '../services/omdb.service'
import { IVideo } from './../models/video.model';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {
  videos: IVideo[] = [];
  modalData = {
    Title: '',
    Year: '',
    imdbID: '',
    Poster: '',
    Type: 'movie',
    Genre: '',
    Director: '',
    Runtime: ''
  }

  constructor(private storeService: StoreService, private omdbService: OmdbService) { }

  ngOnInit() {
    this.omdbService.fromApiToStore()
    this.storeService.getAllVideosFromStore().subscribe(
      (res) => {
        this.videos = res
      }
    )
  }

  modalDataFunc(video) {
    this.modalData = video
  }

}


