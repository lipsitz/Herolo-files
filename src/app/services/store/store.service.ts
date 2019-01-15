import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { IVideo } from '../../models/video.model';
import { AppState } from '../../app.state';
import * as VideoActions from '../../actions/video.actions'


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  videos: Observable<IVideo[]> = this.store.select('video');

  constructor(private store: Store<AppState>) {}
  
  updateVideo(obj) {
    this.store.dispatch(new VideoActions.UpdateVideo(obj))
  }
  removeVideo(id) { 
    this.store.dispatch(new VideoActions.RemoveVideo(id)) }

  addVideoToStore(video) {
    this.store.dispatch(new VideoActions.AddVideo(video))
  }
  getAllVideosFromStore() { return this.videos }

}
