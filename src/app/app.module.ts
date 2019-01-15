import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoThumbnailComponent } from './videos/video-thumbnail/video-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule } from './app-routing.module'
import {OmdbService } from './services/omdb.service';
import {TimeService} from './services/time.service'
import { VideoEditModalComponent } from './videos/video-edit-modal/video-edit-modal.component';
import { VideoDeleteModalComponent } from './videos/video-delete-modal/video-delete-modal.component'
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { VideoAddModalComponent } from './videos/video-add-modal/video-add-modal.component'
import {ToastrModule} from 'ngx-toastr'
import {  StoreModule } from '@ngrx/store';
import { reducer } from './reducers/video.reducer';
import { DatePipe } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoThumbnailComponent,
    NavbarComponent,
    VideoEditModalComponent,
    VideoDeleteModalComponent,
    VideoAddModalComponent
  ],
  imports: [
    ToastrModule.forRoot(
      {
        timeOut:2000,
        positionClass:'toast-bottom-right',
        preventDuplicates:true,
      }
    ),
   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    StoreModule.forRoot({
      video : reducer
    })
  ],
  providers: [OmdbService,TimeService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
