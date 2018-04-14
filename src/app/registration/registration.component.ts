import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Service } from '../globalservice'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myform: FormGroup
  url = "registration"
  msgs = []
  display = false
  constructor(private router: Router, private _service: Service) { }
  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      mobile: new FormControl(),
      username: new FormControl()
    });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  onRegistration(formData) {
    console.log("In onRegistrationFUnction ", formData)
    this._service.registration(formData, this.url).subscribe(apiData => {
      console.log("onRegistration APi data", apiData)
      if (apiData.status == 200) {
        console.log("Show values in 200", apiData.json)
        // this.router.navigateByUrl('/heros');
        this.msgs = []
        this.msgs.push({ severity: 'success', summary: 'Registration Successfull', detail: '' });
        this.router.navigate(['/login']);
        this.display = true
      }
      else if (apiData.status == 500) {
        console.log("Show values in 500", apiData.json)
        // this.router.navigateByUrl('/heros');
        this.msgs = []
        this.msgs.push({ severity: 'error', summary: 'server Error', detail: '' });
        this.router.navigate(['/registration']);
        this.display = true
      }
      else if (apiData.status == 401) {
        console.log("Show values in 401", apiData.json)
        // this.router.navigateByUrl('/heros');
        this.msgs = []
        this.msgs.push({ severity: 'error', summary: 'Email Already Exits', detail: '' });
        this.router.navigate(['/registration']);
        this.display = true
      }
      else {
        console.log("Show values in 500", apiData.json)
        this.msgs = []
        this.msgs.push({ severity: 'error', summary: 'Server Error', detail: '' });
        this.router.navigate(['/registration']);
        this.display = true
      }
    }, (err) => {
      err=err.json()
      console.log(err,"In error part ", err.Message)
      if (err.status == 401) {
        this.msgs = []
        console.log("Show values in error part", err)
        this.msgs.push({ severity: 'error', summary: 'server error', detail: err.Message });
      }
      else if (err.status == 401) {
        this.msgs = []
        console.log("Show values in error part", err)
        this.msgs.push({ severity: 'error', summary: 'server error', detail: err.Message });
      }
      else {
        this.msgs = []
        console.log("Show values in error part", err)
        this.msgs.push({ severity: 'error', summary: 'server error', detail: err.Message });
      }
      // console.log("In Error part", err)
      // this.msgs.push({ severity: 'error', summary: 'Server Error', detail: '' });
    }

    )
    // this.router.navigate(['/registration']);
  }


}
