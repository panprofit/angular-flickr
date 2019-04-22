import {Component, OnInit} from '@angular/core';
import {ImagesService, ImageData} from '../images.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

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

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) =>
      this.imagesList$ = this.imagesService.getList(this.tag = params.tag)
    );
  }

  getImages(tag: string) {
    this.router.navigate([''], {queryParams: {tag}});
  }
}
