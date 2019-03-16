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
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z]+')
        ])),
        lastname :  new FormControl("",Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z]+')
        ])),
        gender :  new FormControl("",Validators.required),
        dob :  new FormControl("",Validators.required),
        fname :  new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32),
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

  passMatch : boolean =false;
  checkPassword(form : FormGroup) : {[key:string]:boolean}|null  //Password Validator
  {
    let pass=form.controls.password.value==null?" ":form.controls.password.value;
    let cpass=form.controls.cpassword.value==null?" ":form.controls.cpassword.value;
    
    //error display
    if(pass==cpass)
      this.passMatch=true;
    else
      this.passMatch=false;  

    return (pass == cpass ? null : {"cpassword":false});
  }


  //error display

  firstnameError: boolean=false;
  lastnameError: boolean=false;
  //genderError: boolean=false;
  dobError: boolean=false;
  emailError: boolean=false;
  fnameError: boolean=false;
  addrError: boolean=false;
  addProofError: boolean=false;
  custError: boolean=false;
  pwdError: boolean=false;
  cpwdError: boolean=false;


  activateError(field:string)
  {
    if(field=="firstname")
      this.firstnameError=true;
    if(field=="lastname")
      this.lastnameError=true;  
    //if(field=="gender")
      //this.genderError=true;  
    if(field=="dob")
      this.dobError=true;  
    if(field=="email")
      this.emailError=true;
    if(field=="fname")
      this.fnameError=true;
    if(field=="addr")
      this.addrError=true; 
    if(field=="addProof")
      this.addProofError=true; 
    if(field=="custID")
      this.custError=true;   
    if(field=="pwd")
      this.pwdError=true;
    if(field=="cpwd")
      this.cpwdError=true;       
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
