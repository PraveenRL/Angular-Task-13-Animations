import { Component, OnInit } from '@angular/core';
import { fade } from './animation';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations : [
   fade
  ]
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items:any[] = [
    'Wash the dishes',
    'Clean it now',
    "Don't make it dirty"
  ];

  addItem(input : HTMLInputElement){
    this.items.splice(0,0,input.value);
    input.value='';
  }
  removeItem(){
    this.items.splice(this.items.indexOf(this.items), 1)
  }

}
