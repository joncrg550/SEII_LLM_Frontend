import { TestBed } from '@angular/core/testing';

import { ChatExportService } from './chat-export.service';

describe('ChatExportService', () => {
  let service: ChatExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
