import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
  constructor(private httpClient: HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
  }
  get(uri: string){
    return this.httpClient.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: object){
    return this.httpClient.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  
  patch(uri: string, payload: object){
    return this.httpClient.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string){
    return this.httpClient.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, password: string)
  {
    return this.httpClient.post(`${this.ROOT_URL}/users/login`,{
      email,
      password
    },
    { observe: 'response'});
  }

  signUp(email: string, password: string)
  {
    return this.httpClient.post(`${this.ROOT_URL}/users`,{
      email,
      password
    },
    { observe: 'response'});
  }

  
  
}
