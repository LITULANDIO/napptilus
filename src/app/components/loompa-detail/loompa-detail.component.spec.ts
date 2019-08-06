import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoompaDetailComponent } from './loompa-detail.component';

describe('LoompaDetailComponent', () => {
  let component: LoompaDetailComponent;
  let fixture: ComponentFixture<LoompaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoompaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoompaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
