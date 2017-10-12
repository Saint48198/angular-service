import {
  Component,
  OnInit
} from '@angular/core';
import { FlickrService } from '../_service';

@Component({
  selector: 'about',
  styles: [`
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      width: 20%;
      text-align: center;
      padding: 0;
    }
    div {
      background-position: 50% 50%;
      background-repeat:   no-repeat;
      background-size:     cover;
      width: 100%;
      height: 200px;
    }
  `],
  templateUrl: './observable1.component.html'
})
export class Observable1Component implements OnInit {
  public images: Object[] = [];

  constructor (public flickrSvc: FlickrService)  {
  }

  public ngOnInit () {
    this.flickrSvc.getObservable().subscribe((resp) => {
      this.images = resp;
    });
  }
}
