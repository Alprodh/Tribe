import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarAppComponent } from './top-bar-app.component';

describe('TopBarAppComponent', () => {
  let component: TopBarAppComponent;
  let fixture: ComponentFixture<TopBarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
