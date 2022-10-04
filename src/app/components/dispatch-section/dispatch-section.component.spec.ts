import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchSectionComponent } from './dispatch-section.component';

describe('DispatchSectionComponent', () => {
  let component: DispatchSectionComponent;
  let fixture: ComponentFixture<DispatchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
