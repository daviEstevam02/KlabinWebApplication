import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspetionPageEquipComponent } from './inspetion-page-equip.component';

describe('InspetionPageEquipComponent', () => {
  let component: InspetionPageEquipComponent;
  let fixture: ComponentFixture<InspetionPageEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspetionPageEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspetionPageEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
