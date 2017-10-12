import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
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
  templateUrl: './observable2.component.html'
})
export class Observable2Component implements OnInit {
  public images: Object[] = [];

  constructor (
    public flickrSvc: FlickrService,
    private _route: ActivatedRoute,
    private _router: Router)  {
  }

  public ngOnInit () {
    this._route.params.switchMap((params: Params) => {
      let page = params['page'] || '1';

      return this.flickrSvc.get(page);
    }).subscribe((resp: Object[]) => {
      this.images = resp;
    });
  }
}
