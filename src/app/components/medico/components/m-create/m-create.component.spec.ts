import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCreateComponent } from './m-create.component';

describe('MCreateComponent', () => {
  let component: MCreateComponent;
  let fixture: ComponentFixture<MCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCreateComponent]
    });
    fixture = TestBed.createComponent(MCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
