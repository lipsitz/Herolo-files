import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router'
import { VideosComponent } from './videos/videos.component';



const routes:Routes = [
  {path:'videos' , component: VideosComponent},
  {path: '',redirectTo:'/videos', pathMatch:'full'}
  
  
  ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
