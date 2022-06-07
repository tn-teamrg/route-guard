import { Component, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: boolean = false;

  @ViewChild('name')

  name!: { nativeElement: { value: any; }; };

  @ViewChild('password')

  password!: { nativeElement: { value: any; }; };

  constructor(public _userService: UserService) { }

  public login() {
    this._userService.authenticate(
      this.name.nativeElement.value,
      this.password.nativeElement.value);
  }
}
