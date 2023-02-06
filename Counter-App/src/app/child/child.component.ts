import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero:number=20;
  @Output() parentFun:EventEmitter<any> = new EventEmitter()
  constructor(){}
  ngOnInit(): void {
    
  } 
  // @Input() count:number=0;
  Encoder(){
    this.hero++;
    this.parentFun.emit(this.hero);
    console.log(this.hero )
  }
  Decoder(){
    this.hero--;
    this.parentFun.emit(this.hero);
    console.log(this.hero )
  }
  reset()
  {
    this.hero=0;
    this.parentFun.emit(this.hero);
  }
 
  ngOninit():void {
    this.parentFun.emit(this.hero)
  }

}
