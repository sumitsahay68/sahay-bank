import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  emi : number = 0;
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
      res : new FormControl("")
    })


    this.form = new FormGroup(
    {
      amount : new FormControl("",Validators.compose([
        Validators.required,
        Validators.min(100),
        Validators.pattern('\d+')
      ])),
      income : new FormControl("",Validators.compose([
        Validators.required,
        Validators.min(100),
        Validators.pattern('\d+')
      ])),
      tframe : new FormControl("",Validators.required)
    }
    )
  }
  xyz(formData)
  {
    console.log(formData)
  }

  onSubmit(formData)
  {
    console.log(formData)
  }
  calculateEMI(amt,rate,dur)
  {
    this.emi=(amt*rate*dur)/100;
  }
}
