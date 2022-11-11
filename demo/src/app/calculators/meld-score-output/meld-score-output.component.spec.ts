import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldScoreOutputComponent } from './meld-score-output.component';

describe('MeldScoreOutputComponent', () => {
  let component: MeldScoreOutputComponent;
  let fixture: ComponentFixture<MeldScoreOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldScoreOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldScoreOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
