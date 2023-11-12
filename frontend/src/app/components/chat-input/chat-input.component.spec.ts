import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChatInputComponent } from './chat-input.component';

describe('ChatInputComponent', () => {
  let component: ChatInputComponent;
  let fixture: ComponentFixture<ChatInputComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ChatInputComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear userMessage on sendMessage', () => {
    component.userMessage = 'Test message';
    component.sendMessage();
    expect(component.userMessage).toEqual('');
  });

  it('should not send an empty message', () => {
    component.userMessage = '';
    component.sendMessage();
    // Implement your own expectation for this case
  });

  it('should send a non-empty message', () => {
    component.userMessage = 'Test message';
    // Implement your own expectation for this case
  });
});
