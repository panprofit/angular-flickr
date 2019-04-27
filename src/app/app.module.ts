import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ImagesModule} from './images/images.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './images/images.module#ImagesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ImagesModule.forRoot({tag: 'kitten'}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
