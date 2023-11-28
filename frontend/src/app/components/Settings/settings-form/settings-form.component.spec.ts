import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFormComponent } from './settings-form.component';

describe('SettingsComponent', () => {
  let component: SettingsFormComponent;
  let fixture: ComponentFixture<SettingsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsFormComponent]
    });
    fixture = TestBed.createComponent(SettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
