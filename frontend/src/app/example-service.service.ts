import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {
  private data: string = 'world';

  getData(): string {
    return this.data;
  }

  constructor() { }
}
