import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../services/store/store.service'
import { IVideo } from 'src/app/models/video.model';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TimeService } from '../../services/time.service'
import { restrictedTitles } from '../../services/title-auth.validator'
@Component({
  selector: 'app-video-edit-modal',
  templateUrl: './video-edit-modal.component.html',
  styleUrls: ['./video-edit-modal.component.css']
})
export class VideoEditModalComponent implements OnInit {
  @Input() video: IVideo;
  public mouseOverSubmit;
  public titleList = []
  public yearsArray: number[]
  public editForm: FormGroup;
  public title: FormControl;
  public year: FormControl;
  public runtime: FormControl;
  public genre: FormControl;
  public director: FormControl;
  public poster: FormControl
  private counter = 0;
  constructor(private timeService: TimeService, private storeService: StoreService) {
    this.yearsArray = this.timeService.getYearsArray()
    this.initForm();
  }

  ngOnInit() {
    this.getTitlesFormStore();
  }

  private initForm(): void {
    this.title = new FormControl('', [Validators.required, Validators.pattern('[a-z ]*'), restrictedTitles(this.titleList)])
    this.year = new FormControl('', Validators.required)
    this.runtime = new FormControl('', Validators.required)
    this.genre = new FormControl('', Validators.required)
    this.director = new FormControl('', Validators.required)
    this.poster = new FormControl('', Validators.required)

    this.editForm = new FormGroup({
      title: this.title,
      year: this.year,
      runtime: this.runtime,
      director: this.director,
      genre: this.genre,
      poster: this.poster
    })
  }
  private getTitlesFormStore(): void {
    this.storeService.getAllVideosFromStore().subscribe(
      (res: any) => {
        if (res.length) {
          this.titleList.push(res[this.counter].Title.toLowerCase());
          ++this.counter;
        }
      });
  }
  editVideo(formValue) {
    let video: IVideo = {
      imdbID: this.video.imdbID,
      Title: formValue.title,
      Year: formValue.year,
      Runtime: formValue.runtime,
      Director: formValue.director,
      Genre: formValue.genre,
      Type: this.video.Type,
      Poster: formValue.poster

    }
    this.storeService.updateVideo(video);
    setTimeout(() => {
      this.editForm.reset()
      this.titleList.push(formValue.Title)
    })
  }

}
