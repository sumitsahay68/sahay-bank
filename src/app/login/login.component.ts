import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  loginSuccess : boolean=false;
  errorMsg :string=null;
  constructor(private restService: RestService,private router: Router,private secure : AuthenticationService) { }

  //FORM_VALIDATION
  ngOnInit() {
    this.form = new FormGroup(
      {
        id : new FormControl("",Validators.required),
        password : new FormControl("",Validators.required)
      }
    )
  }

  onSubmit(formData)
  {
    let id=formData['id']
    let pass=formData['password']
    this.restService.getCustomer(id)
          .subscribe((response: any)=>{
              if(pass==response.json()['password'])
                {
                  this.errorMsg=null;
                  this.secure.setLogIn();
                  this.router.navigate(['users/dashboard']);
                }
              else
                  this.errorMsg="Invalid Password";
          },
          (error)=>{
            this.loginSuccess=false;
            this.errorMsg="Invalid Customer ID";
          }
          )  
  }

}
