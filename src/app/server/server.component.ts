import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  userName='';
  exception='';
  constructor() { }

  ngOnInit(): void {
  }
  onClickEmpty(){
    if(this.userName!=''){
    this.userName='';}
    else{this.exception='Write some text here';}
  }



}
