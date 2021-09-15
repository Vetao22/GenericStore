import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { max } from "rxjs/operators";
import { UserModel } from "../Models/User";

@Injectable({ providedIn: 'root' })
export class UsersService
{
  CurrentUser: UserModel;
  Users: Array<UserModel>;

  constructor()
  {
    this.Users = new Array<UserModel>();

    this.CurrentUser = new UserModel();

    this.Load();
  }

  Load(): void
  {
    let user = new UserModel();
    user.Id = 0;
    user.Name = "Visitor";
    user.Email = "asd@hotmail.com"
    user.Password = "123456";
    user.ThumbnailUrl = "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png";

    this.Users.push(user);
    user = new UserModel();
    user.Id = 1;
    user.Name = "João";
    user.Password = "123456";
    user.ThumbnailUrl = "https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png";

    this.Users.push(user);

    this.CurrentUser = this.Users[0];
  }

  AddUser(name: string, password: string, thumbnailUrl: string, email: string): Observable<any>
  {
    let result;

    result = from(this.Users);
          result.pipe(max<UserModel>((a: UserModel, b: UserModel) => a.Id < b.Id ? -1: 1)).
          subscribe((u: UserModel) =>
          {
              let user = new UserModel();
              user.Id = u.Id + 1;
              user.Email = email;
              user.Name = name;
              user.Password = password;
              user.ThumbnailUrl = thumbnailUrl;
              this.Users.push(user);
          });

    return result;
  }

  RemoveUser(id: number): boolean
  {
    const user = this.Users.find(u => u.Id == id);

    if(user)
    {
      this.Users.splice(this.Users.indexOf(user), 1);

      return true;
    }
    return false;
  }
}
