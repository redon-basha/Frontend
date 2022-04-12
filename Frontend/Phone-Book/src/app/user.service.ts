import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getusers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/view`);
  }

  public adduser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/add`,user);
  }

  public updateuser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/update`,user);
  }


  public deleteuser(userid: String): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${userid}`);
  }


  public selectusebyid(userid:String):Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/view/user/${userid}` )
  }


  public sortuser(sortby: String): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/view/${sortby}`)
  }



}
