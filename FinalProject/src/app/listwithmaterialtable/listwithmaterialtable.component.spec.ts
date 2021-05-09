import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwithmaterialtableComponent } from './listwithmaterialtable.component';

describe('ListwithmaterialtableComponent', () => {
  let component: ListwithmaterialtableComponent;
  let fixture: ComponentFixture<ListwithmaterialtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListwithmaterialtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwithmaterialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
