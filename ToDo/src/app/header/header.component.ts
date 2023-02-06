import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name:string=''
  desc:string=''
  constructor(private container: TasksService ) {
    
  }  
  readName(event:Event){
    this.name=(<HTMLInputElement>event.target).value;
  }
  readDes(event:Event){
    this.desc=(<HTMLInputElement>event.target).value;
  }
  //injecting service 
  addTask(){
    this.container.addDetails({name:this.name,desc:this.desc})
  }
}
