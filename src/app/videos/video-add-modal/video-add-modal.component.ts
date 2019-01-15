import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TimeService } from '../../services/time.service'
import { StoreService } from '../../services/store/store.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { IVideo } from 'src/app/models/video.model';
import { restrictedTitles } from '../../services/title-auth.validator'
@Component({
  selector: 'app-video-add-modal',
  templateUrl: './video-add-modal.component.html',
  styleUrls: ['./video-add-modal.component.css']
})
export class VideoAddModalComponent implements OnInit {
  public video: any
  public titleList = []
  public yearsArray: number[]
  public mouseOverSubmit;
  public addForm: FormGroup
  public title: FormControl;
  public year: FormControl;
  public runtime: FormControl;
  public genre: FormControl;
  public director: FormControl;
  public poster: FormControl;
  private counter = 0;

  constructor(private storeService: StoreService, private timeService: TimeService) {
    this.yearsArray = this.timeService.getYearsArray();
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
    this.addForm = new FormGroup({
      title: this.title,
      year: this.year,
      runtime: this.runtime,
      director: this.director,
      genre: this.genre,
      poster: this.poster
    });
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

  public addVideo(formValue): void {
    let video: IVideo = {
      imdbID: 'tt' + new Date().getTime(),
      Title: formValue.title,
      Year: formValue.year,
      Runtime: formValue.runtime,
      Director: formValue.director,
      Genre: formValue.genre,
      Type: 'movie',
      Poster: formValue.poster
    }

    this.storeService.addVideoToStore(video);
    setTimeout(() => {
      this.addForm.reset()
      this.titleList.push(formValue.Title)
    })
  }
}
