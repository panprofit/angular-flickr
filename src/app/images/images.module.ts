import {Component, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from './images/images.component';
import {RouterModule, Routes} from '@angular/router';
import {ImageDetailsComponent} from './images/image-details/image-details.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {IConfig, ImagesService} from './images.service';
import {FlexModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-images-module',
  template: '<router-outlet></router-outlet>'
})
export class ImagesModuleComponent {}

const routes: Routes = [
  {
    path: '',
    component: ImagesModuleComponent,
    children: [
      {path: '', component: ImagesComponent},
      {path: ':id', component: ImageDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    ImagesModuleComponent,
    ImagesComponent,
    ImageDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule, ImagesModuleComponent]
})
export class ImagesModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: ImagesModule,
      providers: [
        ImagesService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
