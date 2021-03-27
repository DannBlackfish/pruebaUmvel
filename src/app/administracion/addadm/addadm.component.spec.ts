import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadmComponent } from './addadm.component';

describe('AddadmComponent', () => {
  let component: AddadmComponent;
  let fixture: ComponentFixture<AddadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
