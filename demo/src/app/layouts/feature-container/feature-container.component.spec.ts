import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureContainerComponent } from './feature-container.component';

describe('FeatureContainerComponent', () => {
  let component: FeatureContainerComponent;
  let fixture: ComponentFixture<FeatureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
