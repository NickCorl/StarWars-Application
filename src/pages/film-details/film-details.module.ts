import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetailsPage } from './film-details';

@NgModule({
  declarations: [
    FilmDetailsPage
  ],
  imports: [
    // Opens film-details as indicated above.
    // It will seek the child htmlfile for film-details
    IonicPageModule.forChild(FilmDetailsPage),
  ],
})
export class FilmDetailsPageModule {}
