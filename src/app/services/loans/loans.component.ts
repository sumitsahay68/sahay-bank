import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  option : string ="0";
  constructor() { }

  ngOnInit() {
  }
  display(loan_type:string):void
  {
    this.option=loan_type;
  }

}
