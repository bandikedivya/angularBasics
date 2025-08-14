import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthLevelComponent } from './fourth-level.component';

describe('FourthLevelComponent', () => {
  let component: FourthLevelComponent;
  let fixture: ComponentFixture<FourthLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourthLevelComponent]
    });
    fixture = TestBed.createComponent(FourthLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
