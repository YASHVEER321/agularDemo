import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { HerosComponent } from './heros/heros.component'
import { DeshboardComponent } from './deshboard/deshboard.component'
import { ProfileComponent } from './profile/profile.component'
import { RegistrationComponent } from './registration/registration.component'

export const router: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HerosComponent },
    { path: "aboutus", component: DeshboardComponent },
    { path: "profile", component: ProfileComponent },
    { path: "registration", component: RegistrationComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router)