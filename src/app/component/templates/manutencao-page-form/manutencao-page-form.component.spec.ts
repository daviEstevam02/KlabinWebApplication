import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPageFormComponent } from './manutencao-page-form.component';

describe('ManutencaoPageFormComponent', () => {
  let component: ManutencaoPageFormComponent;
  let fixture: ComponentFixture<ManutencaoPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutencaoPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
