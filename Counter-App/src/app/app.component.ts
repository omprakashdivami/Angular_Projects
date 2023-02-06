import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assessment-13';
  count:number=0;
  // data='op'
  parentFun(count:any){
    this.count=count;
  }
  getcolor()
  {
    if(this.count>0)return 'green';
    else if(this.count<0)return 'red'
    else return 'black'
  }
}
