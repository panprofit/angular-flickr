import {Component, OnInit} from '@angular/core';
import {ImagesService, ImageData} from '../images.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  private imagesList: Array<ImageData>;
  public tag: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imagesService: ImagesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.tag = params.tag;
      this.imagesService.getList(this.tag)
        .subscribe((data: Array<ImageData>) => this.imagesList = data);
    });
  }

  getImages(tag: string) {
    this.router.navigate([''], {queryParams: {tag}});
  }
}
