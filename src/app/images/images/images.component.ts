import {Component, OnInit} from '@angular/core';
import {ImagesService, ImageData} from '../../shared/images.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public imagesList$: Observable<Array<ImageData>>;
  public tag: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imagesService: ImagesService
  ) {
  }

  ngOnInit(): void {
    this.imagesList$ = this.route.queryParams.pipe(
      flatMap((params: Params) => this.imagesService.getList(this.tag = params.tag))
    );
  }

}
