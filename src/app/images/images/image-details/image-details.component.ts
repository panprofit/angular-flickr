import {Component, OnInit} from '@angular/core';
import {ImagesService, ImageData} from '../../images.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  public image$: Observable<ImageData>;

  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.route.params.subscribe((params: Params) =>
        this.image$ = this.imagesService.getImage(params.id, queryParams.tag)
      );
    });
  }

}
