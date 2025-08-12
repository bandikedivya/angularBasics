import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdlevelComponent } from './thirdlevel.component';

describe('ThirdlevelComponent', () => {
  let component: ThirdlevelComponent;
  let fixture: ComponentFixture<ThirdlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdlevelComponent]
    });
    fixture = TestBed.createComponent(ThirdlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
