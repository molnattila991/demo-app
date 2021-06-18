import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAPageContainerComponent } from './feature-a-page-container.component';

describe('FeatureAPageContainerComponent', () => {
  let component: FeatureAPageContainerComponent;
  let fixture: ComponentFixture<FeatureAPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
