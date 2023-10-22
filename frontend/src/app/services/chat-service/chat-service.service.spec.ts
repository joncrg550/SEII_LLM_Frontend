import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChatService } from './chat-service.service';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatService]
    });
  });

  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });

  it('should send a message', inject(
    [ChatService, HttpTestingController],
    (service: ChatService, httpMock: HttpTestingController) => {
      const message = 'Test message';
      service.sendMessage(message).subscribe(response => {
        // Implement your own expectations for this test
      });

      const req = httpMock.expectOne('your-api-endpoint');
      expect(req.request.method).toBe('POST');
      req.flush({ /* mock response data */ });
    }
  ));
});
