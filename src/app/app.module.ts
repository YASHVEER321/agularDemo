import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HerosComponent } from './heros/heros.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { OrderListModule } from 'primeng/primeng';
// import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';

import { Service } from './globalservice'
import { HttpModule } from '@angular/http';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {GrowlModule} from 'primeng/growl';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeshboardComponent,
    HerosComponent,
    ProfileComponent,
    RegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    routes,
    OrderListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DialogModule,
    BrowserAnimationsModule,
    MessagesModule,MessageModule,
    GrowlModule,CardModule
    // FormGroup,,MessagesModule
    // FormControl,
    // Validators,
    // FormBuilder
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
