import { Injectable } from '@angular/core';
import { environment as ENV } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './state/user.type';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${ENV.databaseUrl}/users`;

  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.error('getUser failed.', err.message);
        return of(err);
      })
    );
  }

  // TODO: createUser()
  // TODO: updateUser()
  // TODO: deleteUser()

} // end class
