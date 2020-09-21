import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbatableComponent } from './dbatable.component';

describe('DbatableComponent', () => {
  let component: DbatableComponent;
  let fixture: ComponentFixture<DbatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
