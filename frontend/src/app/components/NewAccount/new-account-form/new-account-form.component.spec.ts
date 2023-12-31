import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountComponent } from './new-account-form.component';

describe('NewAccountComponent', () => {
  let component: NewAccountComponent;
  let fixture: ComponentFixture<NewAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAccountComponent]
    });
    fixture = TestBed.createComponent(NewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
