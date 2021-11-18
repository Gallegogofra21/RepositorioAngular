import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMovieAddComponent } from './dialog-movie-add.component';

describe('DialogMovieAddComponent', () => {
  let component: DialogMovieAddComponent;
  let fixture: ComponentFixture<DialogMovieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMovieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMovieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
