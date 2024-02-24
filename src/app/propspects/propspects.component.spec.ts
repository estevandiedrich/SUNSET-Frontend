import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropspectsComponent } from './propspects.component';

describe('PropspectsComponent', () => {
  let component: PropspectsComponent;
  let fixture: ComponentFixture<PropspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
