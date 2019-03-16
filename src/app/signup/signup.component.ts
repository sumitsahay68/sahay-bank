import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private restService:RestService,private router : Router) { }

  //FORM_VALIDATION
  ngOnInit() {      
    this.form = new FormGroup(
      {
        firstname :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z]+')
        ])),
        lastname :  new FormControl("",Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z]+')
        ])),
        gender :  new FormControl("",Validators.required),
        dob :  new FormControl("",Validators.required),
        fname :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z]+')
        ])),
        email :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern('^(\\w|\-|\.)+(\@)(\\w|\-)+(\.)(([a-z]{2,})|([a-z]{2}\.[a-z]{2}))$')
        ])),
        address :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])),
        addr_proof :  new FormControl("",Validators.required),
        id :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('(\w|\.)+')
        ])),
        password :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32)
        ])),
        cpassword :  new FormControl("",Validators.required)
      },(formGroup : FormGroup)=>{
        return this.checkPassword(formGroup);
      }
    );
  }

 
  checkPassword(form : FormGroup) : {[key:string]:boolean}|null  //Password Validator
  {
    let pass=form.controls.password.value==null?" ":form.controls.password.value;
    let cpass=form.controls.cpassword.value==null?" ":form.controls.cpassword.value;

    return (pass == cpass ? null : {"cpassword":false});
  }

  jsonObj;
  onSubmit(formData)
  {
    console.log(formData);
    this.restService.addCustomer(formData)
      .subscribe(
        (response : any)=>{
          console.log('Registration successfully');
          //this.msg="Employee created successfully!!"
          this.router.navigate(['login'])
        }
      )
  }

}
