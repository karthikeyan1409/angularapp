import { Component } from '@angular/core';
import { DataAccessService } from './data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  result: string = "RESULT OF API CALL GOES HERE";

  constructor(private svc: DataAccessService)
  {

  }

  InvokeGet()
  {
    console.log(window.location.href);
      //this.svc.Get().subscribe(result => this.result = result);
  }
  InvokePost()
  {
    this.svc.Post().subscribe(result => this.result = result);
  }
  InvokePut()
  {
    this.svc.Put().subscribe(result => this.result = result);
  }
  InvokeDelete()
  {
    this.svc.Delete().subscribe(result => this.result = result);
  }
}
