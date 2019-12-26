import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAlertComponent } from './blog-alert.component';

describe('BlogAlertComponent', () => {
  let component: BlogAlertComponent;
  let fixture: ComponentFixture<BlogAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
