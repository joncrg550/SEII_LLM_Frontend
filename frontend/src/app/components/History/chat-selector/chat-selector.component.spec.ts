import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectorComponent } from './chat-selector.component';

describe('ChatSelectorComponent', () => {
  let component: ChatSelectorComponent;
  let fixture: ComponentFixture<ChatSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSelectorComponent]
    });
    fixture = TestBed.createComponent(ChatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
