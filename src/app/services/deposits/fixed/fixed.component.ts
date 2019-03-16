import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.css']
})
export class FixedComponent implements OnInit {
  res : number = 0;
  calculator;
  form;
  constructor() { }

  ngOnInit() {
    this.calculator = new FormGroup({
      amount : new FormControl("",Validators.compose([
        Validators.required,
        Validators.min(100),
        Validators.pattern('\d+')
      ])),
      rate : new FormControl("",Validators.required),
      duration : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('\d+')
      ])),
    })


    this.form = new FormGroup(
      {
        amount : new FormControl("",Validators.compose([
          Validators.required,
          Validators.min(100),
          Validators.pattern('\d+')
        ])),
        duration : new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern('\d+')
        ])),
      }
      )
  }

  xyz(formData)
  {
    console.log(formData)
  }

  onSubmit(formData)
  {
    console.log(formData);
  }

  calculateDeposit(amt,rate,dur)
  {
    this.res=(amt*rate*dur)/100;
  }
}
