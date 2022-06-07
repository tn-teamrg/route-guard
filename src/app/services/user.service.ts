import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _authenticated: boolean = false;

  constructor() { }

  public authenticate(name: string, password: string) {
    if ((name === 'user') && (password === 'password')){
    this._authenticated = true;
    }
  }

  public get authenticated(): boolean{
    return this._authenticated;
  }

  public set authenticated(value: boolean){
    this._authenticated = value;
  }

}
