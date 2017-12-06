import { Workout } from '../../app/workout';
import { Inject, Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WrokoutServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WrokoutServiceProvider {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http, @Inject('url') private url) {
    console.log('Hello WrokoutServiceProvider Provider');
  }

  private workouts: Workout[];
  

  getws() {
    return this.http.get(this.url)
      .map((response: Response) => response = response.json());
  }
}