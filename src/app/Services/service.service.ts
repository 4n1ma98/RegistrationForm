import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'https://localhost:44383/api/RegistrationForm/CreateUser';
  private getUsersUrl = 'https://localhost:44383/api/RegistrationForm/GetUsers';

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, user, { headers: headers });
  }

  GetUsers(): Observable<any[]> {
    const headers = new HttpHeaders({ Accept: 'application/json' });
    return this.http.get<any[]>(this.getUsersUrl, { headers: headers });
  }
}
