import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:any[]=[]; // global Array 
  constructor() {}
  addDetails(data:object)
  {
    this.tasks.push(data);
  }
  deleteData(ind:number)
  {
    this.tasks.splice(ind,1);
  }
}
