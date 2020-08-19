import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBuzzComponent } from './feed-buzz.component';

describe('FeedBuzzComponent', () => {
  let component: FeedBuzzComponent;
  let fixture: ComponentFixture<FeedBuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
