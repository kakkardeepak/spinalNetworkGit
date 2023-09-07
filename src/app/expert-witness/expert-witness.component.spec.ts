import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertWitnessComponent } from './expert-witness.component';

describe('ExpertWitnessComponent', () => {
  let component: ExpertWitnessComponent;
  let fixture: ComponentFixture<ExpertWitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertWitnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertWitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
