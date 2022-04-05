import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:7173/api/auth/";
  constructor(private httpClient:HttpClient) { }

  // getProducts():Observable<ResponseModel> {
  //   return this.httpClient.get<ProductResponseModel>(this.apiUrl+"login");
  // }
}
