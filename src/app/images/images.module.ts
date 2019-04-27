import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from './images/images.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {IConfig, ImagesService} from '../shared/images.service';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent
  },
  {
    path: ':id',
    loadChildren: '../image/image.module#ImageModule'
  }
];

@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    FormsModule
  ],
  exports: [RouterModule]
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
