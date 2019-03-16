import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {
  option: string ="0";
  constructor() { }

  ngOnInit() {
  }

  display(deposit_type:string):void
  {
    this.option=deposit_type;
  }

}
