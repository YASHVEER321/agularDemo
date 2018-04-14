import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Service } from './globalservice'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

// @NgModule({
//   imports: [
//     FormsModule,
//     ReactiveFormsModule
//   ]
// })

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [
  //   FormsModule,
  //   Reactiv eFormsModule
  // ]
})
export class AppComponent  {
  title = 'app';
  display: boolean = false;
  msgs = [];
  // myform: FormGroup;
  // myform: FormGroup; 
  constructor(private _service:Service,private router: Router){}
  // ngOnInit() {
  //   this.myform = new FormGroup({
  //     // name: new FormGroup({ 
  //     //     firstName: new FormControl(), 
  //     //     lastName: new FormControl(),
  //     // }),
  //     name: new FormControl(),
  //     password: new FormControl(),
  //     language: new FormControl()
  // });

  // }


// 	onLogin(formData){
//     // let data = btoa(formData.email.toLowerCase() + ':' + formData.pass);
//     console.log("In login function ",formData)
//    let  api={}
// 		this._service.login().subscribe(apiData =>{
//       if(apiData.status==200){
//         console.log("Show values in 200",apiData.json())
//         // this.router.navigateByUrl('/heros');
//         this.msgs.push({severity:'success', summary:'Login Success', detail:''});
//         this.router.navigateByUrl('/login');

//         this.display=true
//       }
//       else if(apiData.status==301){
//         console.log("Show values in 301",apiData.json())
//       }
//       else{
//         this.msgs.push({severity:'error', summary:'Server Error', detail:''});
//         console.log("Show values in other",apiData.json())
//       }
//     }
		
// 			)


//       console.log("check form data ",formData)
//       console.log("check api data ",api)



// }

}


