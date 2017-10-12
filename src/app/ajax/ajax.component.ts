import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  templateUrl: './ajax.component.html'
})
export class AjaxComponent implements OnInit {
  public images: Object[] = [];

  private key: string = '858f9536a6f27a43454e42f4240aa419';
  private secret: string = '6b9b2eae58900f56';
  private api: string = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=10&format=json&nojsoncallback=1&api_key=';

  constructor (public route: ActivatedRoute)  {
  }

  public ngOnInit () {
    let view = this;
    let request = new XMLHttpRequest();
    request.open('GET', this.api + this.key, true);

    request.onload = function () {
      if (this['status'] >= 200 && this['status'] < 400) {
        let json = JSON.parse(this['response']);
        if (json['photos'] && json['photos']['photo']) {
          view.images = json['photos']['photo'];
        }
      } else {
        // show error
      }
    };

    request.onerror = function () {
      // show error
      console.log('error');
    };

    request.send();
  }
}
