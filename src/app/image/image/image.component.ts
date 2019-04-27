import {Component, OnInit} from '@angular/core';
import {ImagesService, ImageData} from '../../shared/images.service';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-image-details',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  public image$: Observable<ImageData>;

  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService
  ) {
  }

  ngOnInit(): void {
    this.image$ = combineLatest(
      this.route.params,
      this.route.queryParams,
    ).pipe(
      flatMap(([params, queryParams]) => this.imagesService.getImage(params.id, queryParams.tag))
    );
  }

}
