import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form;
  constructor() { }
  
  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32),
        Validators.pattern('[A-Za-z]+')
      ])),
      email : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('^(\\w|\-|\.)+(\@)(\\w|\-)+(\.)(([a-z]{2,})|([a-z]{2}\.[a-z]{2}))$')
      ])),
      mob : new FormControl("",Validators.compose([
        Validators.minLength(8),
        Validators.pattern('^(\\+)(\d|\-)+$')
      ])),
      message : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(20)
      ])),
    })
  }

  //error display

  nameError: boolean=false;
  emailError: boolean=false;
  mobError: boolean=false;
  msgError: boolean=false;

  activateError(field:string)
  {
    if(field=="name")
      this.nameError=true;
    if(field=="email")
      this.emailError=true;
    if(field=="mob")
      this.mobError=true;
    if(field=="msg")
      this.msgError=true;      
  }

  onSubmit(formData)
  {
    console.log(formData)
  }

}
