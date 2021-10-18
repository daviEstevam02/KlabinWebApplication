import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPageFormComponent } from './inspection-page-form.component';

describe('InspectionPageFormComponent', () => {
  let component: InspectionPageFormComponent;
  let fixture: ComponentFixture<InspectionPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
