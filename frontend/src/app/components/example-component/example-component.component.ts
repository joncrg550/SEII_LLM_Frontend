import { Component } from '@angular/core';
import { ExampleServiceService } from '../../services/example-service/example-service.service';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent {
data: string;

constructor(private exampleService: ExampleServiceService) {
  this.data = this.exampleService.getData();
}
}
