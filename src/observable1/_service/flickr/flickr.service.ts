import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlickrService {
  private key: string = '858f9536a6f27a43454e42f4240aa419';
  private secret: string = '6b9b2eae58900f56';
  private api: string = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=10&format=json&nojsoncallback=1&api_key=';

  constructor (
    private _http: Http
  ) {}

  public get (page?: string): Promise<Object[]> {
    let headers = new Headers();
    let url = this.api + this.key;

    if (page) {
      url += '&page=' + page;
    }

    return this._http.get(url, new RequestOptions(({headers})))
      .map((resp) => resp.json())
      .map((json) => {
        let data = []
        if (json['photos'] && json['photos']['photo']) {
          data = json['photos']['photo'];
        }

        return data;
      })
      .toPromise();
  }

  public getObservable (page?: string): Observable<Object[]> {
    let headers = new Headers();
    let url = this.api + this.key;

    if (page) {
      url += '&page=' + page;
    }

    return this._http.get(url, new RequestOptions(({headers})))
      .map((resp) => resp.json())
      .map((json) => {
        let data = []
        if (json['photos'] && json['photos']['photo']) {
          data = json['photos']['photo'];
        }

        return data;
      });
  }
}
