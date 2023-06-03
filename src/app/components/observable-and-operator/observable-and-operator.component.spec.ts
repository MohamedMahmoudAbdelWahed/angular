import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAndOperatorComponent } from './observable-and-operator.component';

describe('ObservableAndOperatorComponent', () => {
  let component: ObservableAndOperatorComponent;
  let fixture: ComponentFixture<ObservableAndOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableAndOperatorComponent]
    });
    fixture = TestBed.createComponent(ObservableAndOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
