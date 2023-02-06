import { Component , Input,  } from '@angular/core';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() detailsArray:any[]=[]
  obj:object={name:'',desc:''}
  constructor(private data:TasksService){ //injecting service
    this.detailsArray=data.tasks
  }
  del(event:number){
    this.data.deleteData(event);
  }

}
