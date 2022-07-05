import { Component } from '@angular/core';
import { DataAccessService } from './data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  result: any;
 

  constructor(private svc: DataAccessService)
  {

  }

  InvokeGet()
  {
    alert("Executing on browser. Button click fired");
      this.svc.Get().subscribe(result => 
        {
          this.result = result;
          console.log(result);
        });
  }
  InvokePost()
  {
    this.svc.Post().subscribe(result => 
      {
        this.result = result
        console.log(result);
      });
  }
  InvokePut()
  {
    this.svc.Put().subscribe(result => 
      {
        this.result = result
        console.log(result);
      });
  }
  InvokeDelete()
  {
    this.svc.Delete().subscribe(result => 
      {
        this.result = result
        console.log(result);
      });
  }
}
