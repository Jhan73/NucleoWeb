import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraActivityComponent } from './extra-activity.component';

describe('ExtraActivityComponent', () => {
  let component: ExtraActivityComponent;
  let fixture: ComponentFixture<ExtraActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraActivityComponent]
    });
    fixture = TestBed.createComponent(ExtraActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
