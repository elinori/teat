import { Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  {
lastName: string;
name: string;
  constructor(private service: HttpServiceService, private router: Router , private localStorageService: LocalStorageService) {

      if (localStorageService.get('user') === null) {
        this.router.navigate(['auth/login'] );
      } else { this.name = localStorageService.get('user')['first_name'];
               this.lastName = localStorageService.get('user')['last_name'];
    }

}
}
