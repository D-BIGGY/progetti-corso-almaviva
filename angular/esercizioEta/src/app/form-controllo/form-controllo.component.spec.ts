import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlloComponent } from './form-controllo.component';

describe('FormControlloComponent', () => {
  let component: FormControlloComponent;
  let fixture: ComponentFixture<FormControlloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlloComponent]
    });
    fixture = TestBed.createComponent(FormControlloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
