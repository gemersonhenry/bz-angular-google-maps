import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAgmMapComponent } from './custom-agm-map.component';

describe('CustomAgmMapComponent', () => {
  let component: CustomAgmMapComponent;
  let fixture: ComponentFixture<CustomAgmMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAgmMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAgmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
