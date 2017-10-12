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
  templateUrl: './promise-all.component.html'
})
export class PromiseAllComponent implements OnInit {
  public images: Object[] = [];

  constructor (public flickrSvc: FlickrService)  {
  }

  public ngOnInit () {
    Promise.all(
      [
        this.flickrSvc.getObservable('1').toPromise(),
        this.flickrSvc.getObservable('2').toPromise(),
        this.flickrSvc.getObservable('3').toPromise(),
      ]
    ).then((results) => {
      if (results[0].length) {
        this.images = this.images.concat(results[0]);
      }

      if (results[1].length) {
        this.images = this.images.concat(results[1]);
      }

      if (results[2].length) {
        this.images = this.images.concat(results[2]);
      }
    });
  }
}
