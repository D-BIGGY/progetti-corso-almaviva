import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoDavveroComponent } from './nuovo-davvero.component';

describe('NuovoDavveroComponent', () => {
  let component: NuovoDavveroComponent;
  let fixture: ComponentFixture<NuovoDavveroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuovoDavveroComponent]
    });
    fixture = TestBed.createComponent(NuovoDavveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
