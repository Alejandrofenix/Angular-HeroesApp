import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth():Auth {
    return { ...this._auth! }; //Se destructura con el ... para asegurarnos de que no se cambiaran los valores
  }

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${this._url}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth)
      );



  }
}
