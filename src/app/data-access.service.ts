import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  public Get(): Observable<string>
  {
      return this.http.get<string>("");
  }
  public Post(): Observable<string>
  {
    return this.http.post<string>("", null);
  }
  public Put(): Observable<string>
  {
    return this.http.put<string>("", null);
  }
  public Delete(): Observable<string>
  {
    return this.http.delete<string>("");
  }

}
