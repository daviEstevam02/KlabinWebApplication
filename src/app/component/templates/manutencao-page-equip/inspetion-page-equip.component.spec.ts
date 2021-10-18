import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPageEquipComponent } from './manutencao-page-equip.component';

describe('ManutencaoPageEquipComponent', () => {
  let component: ManutencaoPageEquipComponent;
  let fixture: ComponentFixture<ManutencaoPageEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoPageEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPageEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
