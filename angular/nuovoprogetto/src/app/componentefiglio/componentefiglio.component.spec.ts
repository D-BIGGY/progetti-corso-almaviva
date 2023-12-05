import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentefiglioComponent } from './componentefiglio.component';

describe('ComponentefiglioComponent', () => {
  let component: ComponentefiglioComponent;
  let fixture: ComponentFixture<ComponentefiglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentefiglioComponent]
    });
    fixture = TestBed.createComponent(ComponentefiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
