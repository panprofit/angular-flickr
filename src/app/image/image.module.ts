import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from './image/image.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatChipsModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ImageComponent
  }
];

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatChipsModule,
    FlexModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class ImageModule {
}
