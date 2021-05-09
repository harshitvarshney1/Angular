import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductwithasyncComponent } from './listproductwithasync.component';

describe('ListproductwithasyncComponent', () => {
  let component: ListproductwithasyncComponent;
  let fixture: ComponentFixture<ListproductwithasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductwithasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductwithasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
