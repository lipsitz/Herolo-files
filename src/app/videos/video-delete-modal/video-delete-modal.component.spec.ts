import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDeleteModalComponent } from './video-delete-modal.component';

describe('VideoDeleteModalComponent', () => {
  let component: VideoDeleteModalComponent;
  let fixture: ComponentFixture<VideoDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
