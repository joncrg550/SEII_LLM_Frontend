import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  constructor() { }

  readonly openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  
    async getDataFromOpenAPI(text: string) {
      const completion = await this.openai.completions.create({
        model: "gpt-3.5-turbo",
        prompt: text,
      });

      console.log(completion);
  }

}

