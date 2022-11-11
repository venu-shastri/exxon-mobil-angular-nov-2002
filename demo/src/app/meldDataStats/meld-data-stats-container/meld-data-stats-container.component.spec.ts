import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldDataStatsContainerComponent } from './meld-data-stats-container.component';

describe('MeldDataStatsContainerComponent', () => {
  let component: MeldDataStatsContainerComponent;
  let fixture: ComponentFixture<MeldDataStatsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldDataStatsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldDataStatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
