import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInpectionComponent } from './register-inpection.component';

describe('RegisterInpectionComponent', () => {
  let component: RegisterInpectionComponent;
  let fixture: ComponentFixture<RegisterInpectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInpectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInpectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
