import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDashComponent } from './c-dash.component';

describe('CDashComponent', () => {
  let component: CDashComponent;
  let fixture: ComponentFixture<CDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CDashComponent]
    });
    fixture = TestBed.createComponent(CDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
