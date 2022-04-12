import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormControlName, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UseinfoComponent } from './useinfo/useinfo.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:'', component:UserlistComponent},
  {path:'user/:id', component:UseinfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UseinfoComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
