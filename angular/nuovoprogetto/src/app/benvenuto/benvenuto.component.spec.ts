import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvenutoComponent } from './benvenuto.component';

describe('BenvenutoComponent', () => {
  let component: BenvenutoComponent;
  let fixture: ComponentFixture<BenvenutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenvenutoComponent]
    });
    fixture = TestBed.createComponent(BenvenutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
