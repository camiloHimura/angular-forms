import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventComponent } from './property-event.component';

describe('PropertyEventComponent', () => {
  let component: PropertyEventComponent;
  let fixture: ComponentFixture<PropertyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
