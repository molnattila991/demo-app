import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBPageContainerComponent } from './feature-b-page-container.component';

describe('FeatureBPageContainerComponent', () => {
  let component: FeatureBPageContainerComponent;
  let fixture: ComponentFixture<FeatureBPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
