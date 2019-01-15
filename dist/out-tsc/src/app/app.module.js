var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoThumbnailComponent } from './videos/video-thumbnail/video-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { OmdbService } from './services/omdb.service';
import { VideoEditModalComponent } from './videos/video-edit-modal/video-edit-modal.component';
import { VideoDeleteModalComponent } from './videos/video-delete-modal/video-delete-modal.component';
import { FormsModule } from '@angular/forms';
import { VideoAddModalComponent } from './videos/video-add-modal/video-add-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/video.reducer';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ToastrModule.forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                FormsModule,
                StoreModule.forRoot({
                    video: reducer
                })
            ],
            providers: [OmdbService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map