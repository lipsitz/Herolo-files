import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEditModalComponent } from './video-edit-modal.component';

describe('VideoEditModalComponent', () => {
  let component: VideoEditModalComponent;
  let fixture: ComponentFixture<VideoEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
