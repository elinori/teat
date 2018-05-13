import { UserModel } from './user-model';
import { Token } from './token';
import { Injectable , EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
body: any;
token: string;
user: EventEmitter <UserModel>  = new EventEmitter();
arr: UserModel[];
allusers: EventEmitter <any>  = new EventEmitter();

constructor(private http: HttpClient) { }

  login(login: Token) {
    this.body = {
      email: login.email,
      password: login.password

    };


    // tslint:disable-next-line:max-line-length
    this.http.post('http://18.218.39.178/api/user/auth/login', this.body).toPromise().then(u => { this.token = u['access_token']; if (this.token != null) { this.user.emit(u as UserModel);

  // tslint:disable-next-line:max-line-length
  this.getAllusers().then(users => { this.arr = users as UserModel[]; this.allusers.emit(this.arr); });
  }});
  }

  getAllusers() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
   return this.http.get('http://18.218.39.178/api/user', httpOptions).toPromise();
  }

}
