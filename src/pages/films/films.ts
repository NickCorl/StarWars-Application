import { ApiProvider } from './../../providers/api/api';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  films: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film) {
    // When a button is clicked the FilmDetailsPage is moved to the from of the films page.
    // This is treated much like a stack
    // It is passing this.films containing the data from the starwars api linked above (line: 22)
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }

  goToPlanets() {

    //Parent indicates the root navigation as declared in tabs.ts
    this.navCtrl.parent.select(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
