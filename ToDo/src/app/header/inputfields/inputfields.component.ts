import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.scss']
})
export class InputfieldsComponent {
  @Input() placeholder:string = ''; 
  
}
