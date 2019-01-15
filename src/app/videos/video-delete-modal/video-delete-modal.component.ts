import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store/store.service';

@Component({
  selector: 'app-video-delete-modal',
  templateUrl: './video-delete-modal.component.html',
  styleUrls: ['./video-delete-modal.component.css']
})
export class VideoDeleteModalComponent implements OnInit {
  @Input() video: any

  constructor(private storeService: StoreService) { }

  ngOnInit() { }

  deleteVideo(video) {
    this.storeService.removeVideo(video)
  }
}
