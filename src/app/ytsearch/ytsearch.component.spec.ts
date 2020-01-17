import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtsearchComponent } from './ytsearch.component';

describe('YtsearchComponent', () => {
  let component: YtsearchComponent;
  let fixture: ComponentFixture<YtsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
