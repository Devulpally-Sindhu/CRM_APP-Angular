import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudentRegistrationComponent } from './sudent-registration.component';

describe('SudentRegistrationComponent', () => {
  let component: SudentRegistrationComponent;
  let fixture: ComponentFixture<SudentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SudentRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
