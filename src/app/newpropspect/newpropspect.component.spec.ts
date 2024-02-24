import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpropspectComponent } from './newpropspect.component';

describe('NewpropspectComponent', () => {
  let component: NewpropspectComponent;
  let fixture: ComponentFixture<NewpropspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpropspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpropspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
