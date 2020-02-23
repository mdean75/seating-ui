import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeEntryComponent } from './attendee-entry.component';

describe('AttendeeEntryComponent', () => {
  let component: AttendeeEntryComponent;
  let fixture: ComponentFixture<AttendeeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
