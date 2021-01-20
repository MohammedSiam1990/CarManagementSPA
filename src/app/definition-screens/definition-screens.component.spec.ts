import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionScreensComponent } from './definition-screens.component';

describe('DefinitionScreensComponent', () => {
  let component: DefinitionScreensComponent;
  let fixture: ComponentFixture<DefinitionScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
