import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/Services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  email: string;
  password: string;

  constructor(public loginService: LoginService, private modalService: NgbModal)
  { }

  ngOnInit(): void
  {

  }

  OpenModal(modal): void
  {
      this.modalService.open(modal, { centered: true });
  }

  Login(): void
  {
    if(this.email && this.password)
    {
       if(this.loginService.Login(this.email, this.password))
       {
          this.modalService.dismissAll();
       }
    }
  }

  Logout(): void
  {
    if(this.loginService.logged)
    {
      if(this.loginService.Logout())
      {

      }
    }
  }

}
