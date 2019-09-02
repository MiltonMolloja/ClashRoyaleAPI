import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClanComponent } from './list-clan.component';

describe('ListClanComponent', () => {
  let component: ListClanComponent;
  let fixture: ComponentFixture<ListClanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
