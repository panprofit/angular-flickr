import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {
  private imagesList: Array<ImageData>;
  private tag: string;

  constructor(
    private http: HttpClient,
    @Inject('config') private config: IConfig
  ) {
  }

  getList(tag: string = this.config.tag): Observable<Array<ImageData>> {
    if (!this.imagesList || tag !== this.tag) {
      this.tag = tag;
      return this.http.jsonp(`${environment.API_URL}?tags=${tag}&format=json`, 'jsoncallback')
        .pipe(
          map((data: ImagesData) =>
            this.imagesList = data.items.map((item) =>
              Object.assign(item,
                {id: item.media.m.split('/').pop().replace('_m.', '.')}))
          )
        );
    } else {
      return of(this.imagesList);
    }
  }

  getImage(id: string, tag: string): Observable<ImageData> {
    if (!this.imagesList) {
      return this.getList(tag)
        .pipe(
          map((data: Array<ImageData>) => data.find((item) => item.id === id))
        );
    } else {
      return of(this.imagesList.find((item) => item.id === id));
    }
  }

}

export interface ImagesData {
  'title': string;
  'link': string;
  'description': string;
  'modified': Date;
  'generator': string;
  'items': Array<ImageData>;
}

export interface ImageData {
  'id': string;
  'title': string;
  'link': string;
  'media': { 'm': string };
  'date_taken': Date;
  'description': string;
  'published': Date;
  'author': string;
  'author_id': string;
  'tags': string;
}

export interface IConfig {
  tag: string;
}
