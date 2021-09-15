import { Component } from '@angular/core';
import { NgbConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'GenericStore';

  constructor(ngbConfig: NgbConfig)
  {

  }

  OnActivate(event: Event)
  {
    window.scroll(0,0);
  }
}
