import { HttpServiceService } from './../http-service.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
 import { Router } from '@angular/router';
 import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserModel } from '../user-model';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpServiceService, private router: Router, private fb: FormBuilder, private localStorageService: LocalStorageService) {
this.createForm();
this.localStorageService.set('user', null);

   }
   login(userForm: NgForm) {

if (userForm.valid) {
  this.http.login(userForm.value);
  this.http.user.subscribe(x => {this.localStorageService.set('user', x); this.router.navigate(['page/deshbord']);

} );

}
   }

  ngOnInit() {

  }
  createForm() {
    this.userForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });




  }
}
