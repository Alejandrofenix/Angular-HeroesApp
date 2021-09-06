import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators";
import { Observable, of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

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

  verificaAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);//Resuleve en un obseravle el valor que le ponemos
    }
    return this.http.get<Auth>(`${this._url}/usuarios/1`).pipe(
      map( auth=> {
        return true;
      } )
    );
  }

  login() {
    return this.http.get<Auth>(`${this._url}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('id',auth.id)) //Se graba el auth.id en el local storage
      );



  }
}
