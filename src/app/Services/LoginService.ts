import { Injectable } from "@angular/core";
import { UserModel } from "../Models/User";
import { UsersService } from "./UsersService";

@Injectable({ providedIn: 'root' })
export class LoginService
{
  logged: boolean;
  user: UserModel;

  constructor(public usersService: UsersService)
  {
    this.logged = false;
  }

  Login(email: string, password: string): boolean
  {
    for(let x = 0; x < this.usersService.Users.length; x++)
    {
      if(this.usersService.Users[x].Email == email && this.usersService.Users[x].Password == password)
      {
        this.user = this.usersService.Users[x];
        this.logged = true;

        return true;
      }
    }
    return false;
  }

  Logout(): boolean
  {
    if(this.user != null)
    {
      this.user = null;
      this.logged = false;

      return true;
    }
    return false;
  }
}
