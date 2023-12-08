import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDisplayComponent } from './history-display.component';

describe('HistoryDisplayComponent', () => {
  let component: HistoryDisplayComponent;
  let fixture: ComponentFixture<HistoryDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryDisplayComponent]
    });
    fixture = TestBed.createComponent(HistoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
