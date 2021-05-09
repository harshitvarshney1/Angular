import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebyidComponent } from './updatebyid.component';

describe('UpdatebyidComponent', () => {
  let component: UpdatebyidComponent;
  let fixture: ComponentFixture<UpdatebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
