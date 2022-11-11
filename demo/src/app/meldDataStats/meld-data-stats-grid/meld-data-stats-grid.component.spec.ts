import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldDataStatsGridComponent } from './meld-data-stats-grid.component';

describe('MeldDataStatsGridComponent', () => {
  let component: MeldDataStatsGridComponent;
  let fixture: ComponentFixture<MeldDataStatsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldDataStatsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldDataStatsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
