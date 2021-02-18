import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrCpComponent } from './corr-cp.component';

describe('CorrCpComponent', () => {
  let component: CorrCpComponent;
  let fixture: ComponentFixture<CorrCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
