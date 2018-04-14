import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Service } from '../globalservice'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Message } from 'primeng/primeng';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // title = 'app';
  display: boolean = false;
  // msgs = [];
  msgs: Message[] = [];
  Error = [];
  myform: FormGroup;
  constructor(private _service: Service, private router: Router) { }
  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      // language: new FormControl()
    });

  }
  onRegistration() {
    this.router.navigate(['/registration']);
  }

  onLogin(formData) {
    // let data = btoa(formData.email.toLowerCase() + ':' + formData.pass);
  // this.Error = [];
    console.log("In login function ", formData)
    let api = {}
    // this.Error=[]
    let url = "user/login"
    this._service.login(formData, url).subscribe(apiData => {
      console.log("after subscribe", apiData)
      if (apiData.status == 200) {
        console.log("Show values in 200", apiData.json)
        // this.router.navigateByUrl('/heros');
        this.msgs=[]
        this.msgs.push({ severity: 'success', summary: 'Login Success', detail: '' });
        this.router.navigate(['/profile'], { queryParams: { name: (apiData.json.value._id).toString() } });

        this.display = true
      }
      else if (apiData.status == 500) {
        this.msgs=[]
        this.Error.push({ severity: 'error', summary: 'Server Error', detail: 'its server fault' });

        console.log("Show values in 301", apiData.json())
      }
      else if (apiData.status == 401) {
        this.msgs=[]
        console.log("Show values in other", apiData.json())
        this.Error.push({ severity: 'error', summary: 'server error', detail: 'user not found' });
      }
      else {
        this.msgs=[]
        this.Error.push({ severity: 'error', summary: 'Server Error', detail: '' });
      }
  this.Error = [];
    }, (err) => {
      if (err.status == 401) {
        this.msgs=[]
        console.log("Show values in error part", err)
        this.msgs.push({ severity: 'error', summary: 'server error', detail: 'user not found' });
      }
      else {
        this.msgs=[]
        console.log("Show values in error part", err)
        this.msgs.push({ severity: 'error', summary: 'server error', detail: 'user not found' });
      }
      // console.log("In Error part", err)
      // this.msgs.push({ severity: 'error', summary: 'Server Error', detail: '' });
    }

    )


    console.log("check form data ", formData)
    // console.log("check api data ",api)



  }

}


