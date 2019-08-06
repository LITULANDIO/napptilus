import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoompaComponent } from './loompa.component';

describe('LoompaComponent', () => {
  let component: LoompaComponent;
  let fixture: ComponentFixture<LoompaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoompaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoompaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
