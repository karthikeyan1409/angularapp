import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  restapiport: string = "9999";
  controllername: string = "Demo";
  url: string = "http://" +window.location.hostname +":" +this.restapiport +"/" +this.controllername;
  //url: string = "http://localhost:5295/Demo" 
 
  constructor(private http: HttpClient) { }

  public Get(): Observable<any>
  {
      console.log("GET CALLED");
      return this.http.get<any>(this.url);
  }
  public Post(): Observable<any>
  {
    console.log("POST CALLED");
    return this.http.post<any>(this.url, {});
  }
  public Put(): Observable<any>
  {
    console.log("PUT CALLED");
    return this.http.put<any>(this.url, {});
  }
  public Delete(): Observable<any>
  {
    console.log("DELETE CALLED");
    return this.http.delete<any>(this.url);
  }
}
