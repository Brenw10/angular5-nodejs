import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get(this.API_URL + '/users');
  }

}
