import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Route, Router } from "@angular/router";
// import { CanActivate, Router, ActivatedRoute} from '@angular/router';

import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

declare var jQuery: any;
declare var toastr: any;

// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class Service {

    // private _url: string = "http://agro.sia.co.in/admin/getallemployee";
    private _url: string = "http://localhost:3000/api/";
    //    let data = btoa(formData.email.toLowerCase() + ':' + formData.pass);
    constructor(private _http: Http) { }

    login(data, url) {
        console.log("In login ", data)
        var headers = new Headers(), authtoken = localStorage.getItem('authtoken');
        headers.append("Content-Type", 'application/json');

        // if (authtoken) {
        //     headers.append("Authorization", 'Token ' + authtoken)
        // }
        headers.append("Accept", 'application/json');

        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this._url + url,
            headers: headers,
            body: data
        })

        return this._http.request(new Request(requestoptions))
            .map((response: Response) =>
            //.catch(this.errorHandler)
            {
                if (response) {
                    return { status: response.status, json: response.json() }
                }
            })

    }

    registration(data, url) {
        console.log("In registration ")
        var headers = new Headers(), authtoken = localStorage.getItem('authtoken');
        headers.append("Content-Type", 'application/json');

        // if (authtoken) {
        //     headers.append("Authorization", 'Token ' + authtoken)
        // }
        headers.append("Accept", 'application/json');

        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this._url + url,
            headers: headers,
            body: data
        })
        return this._http.request(new Request(requestoptions))
            .map((response: Response) =>
            //.catch(this.errorHandler)
            {
                if (response) {
                    return { status: response.status, json: response.json() }
                }
            })

    }


    get(data, url) {
        console.log("In Get ", data, url)
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        // headers.append("Authorization", "Basic " + data);

        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this._url + url,
            headers: headers
        });

        return this._http.request(new Request(requestoptions))
            .map((res: Response) => {
                console.log("data from api ", res.json)
                let jsonObj: any;
                if (res.status === 204) {
                    jsonObj = null;
                }
                else if (res.status === 500) {
                    jsonObj = null;
                }
                else if (res.status === 200) {
                    jsonObj = res.json()
                }
                else if (res.status === 401) {
                    jsonObj = null
                }
                return { status: res.status, json: jsonObj }
            })
            .catch(error => {
                return Observable.throw(error);
            });
    }

    errorHandler(error: Response) {
        console.error("this is the Error", error);
        return Observable.throw(error || "Server Error");
    }


}


