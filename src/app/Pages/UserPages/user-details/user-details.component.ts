import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { max } from 'rxjs/operators';
import { UserModel } from 'src/app/Models/User';
import { LoginService } from 'src/app/Services/LoginService';
import { UsersService } from 'src/app/Services/UsersService';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit
{
  @ViewChild(NgForm, {static: true}) form: NgForm;

  user: UserModel;
  creating: boolean;

  constructor(private usersService: UsersService, private loginService: LoginService,
              private route: ActivatedRoute, private modalService: NgbModal)
  {
     let id;

     this.creating = false;

     route.paramMap.subscribe((params) =>
       {
         id = params.get('id');

         if(id == -1)
         {
           this.creating = true;

           this.user = new UserModel();
           this.user.ThumbnailUrl = "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png";

           return;
         }

         const searchUser = usersService.Users.find((u) => u.Id == id);

         this.user = new UserModel();
         this.user.Id = searchUser.Id;
         this.user.Name = searchUser.Name;
         this.user.Email = searchUser.Email;
         this.user.Password = searchUser.Password;
         this.user.ThumbnailUrl = searchUser.ThumbnailUrl;
       });
  }

  ngOnInit(): void
  {

  }

  OnSubmit(): void
  {

  }

  AcceptChanges(acceptChangesModal): void
  {
    if(this.creating)
    {
        this.usersService.AddUser(this.user.Name, this.user.Password, this.user.ThumbnailUrl, this.user.Email)
          .subscribe(() => this.loginService.Login(this.user.Email, this.user.Password));
    }
    else
    {
      const searchUser = this.usersService.Users.find(u => u.Id == this.user.Id);
      const userIndex = this.usersService.Users.indexOf(searchUser);
      this.usersService.Users[userIndex] = this.user;
    }

     this.OpenModal(acceptChangesModal);
  }

  OpenModal(modal)
  {
    this.modalService.open(modal, { centered: true });
  }
}
