import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeceXProgramsComponent } from './spece-x-programs.component';

describe('SpeceXProgramsComponent', () => {
  let component: SpeceXProgramsComponent;
  let fixture: ComponentFixture<SpeceXProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeceXProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeceXProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
