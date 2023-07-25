import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDashComponent } from './m-dash.component';

describe('MDashComponent', () => {
  let component: MDashComponent;
  let fixture: ComponentFixture<MDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDashComponent]
    });
    fixture = TestBed.createComponent(MDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
