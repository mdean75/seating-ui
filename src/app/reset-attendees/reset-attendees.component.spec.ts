import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAttendeesComponent } from './reset-attendees.component';

describe('ResetAttendeesComponent', () => {
  let component: ResetAttendeesComponent;
  let fixture: ComponentFixture<ResetAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
