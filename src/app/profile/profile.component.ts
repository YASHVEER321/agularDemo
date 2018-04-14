import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Service } from '../globalservice'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = new String("")
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _service: Service,//, private router: Router
    // private getUserDetails:this.getUserDetails
  ) {

  }
  sessionId = "";
  url = new String()
  detailsValue = " "
  userName=" "
  email= " "
  mobile= " "
  ngOnInit() {
    // this.sessionId = this.route.queryParams['name']
    // this.sessionId= this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.queryParams["name"]
    this.id = this.id.replace('/\"/g',"")
    this.userName=""
    this.url = "user/" + this.id
    this.getUserDetails(this.id, this.url)
    console.log(this.url, "this is profile", this.id)
  }

  getUserDetails(id, url) {
    console.log("In details fucntion ", id)
    this._service.get(this.id, this.url).subscribe(apiData => {
      console.log("detais data ", apiData.json.userData)
      this.userName=apiData.json.userData.username
      this.email=apiData.json.userData.email
      this.mobile=apiData.json.userData.mobile
      // return ({ apiData: apiData })
    }, (err) => {
      return ({ Error: "Error found" + err })
    })
  }

}
