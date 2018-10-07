import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEnCoursComponent } from './action-en-cours.component';

describe('ActionEnCoursComponent', () => {
  let component: ActionEnCoursComponent;
  let fixture: ComponentFixture<ActionEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
