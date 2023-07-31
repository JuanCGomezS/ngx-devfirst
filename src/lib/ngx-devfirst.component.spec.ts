import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDevfirstComponent } from './ngx-devfirst.component';

describe('NgxDevfirstComponent', () => {
  let component: NgxDevfirstComponent;
  let fixture: ComponentFixture<NgxDevfirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDevfirstComponent]
    });
    fixture = TestBed.createComponent(NgxDevfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
