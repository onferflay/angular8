import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeomComponent } from './user-deom.component';

describe('UserDeomComponent', () => {
  let component: UserDeomComponent;
  let fixture: ComponentFixture<UserDeomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
