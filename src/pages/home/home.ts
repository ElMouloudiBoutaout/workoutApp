import { Workout } from '../../app/workout';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WrokoutServiceProvider } from '../../providers/wrokout-service/wrokout-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  workouts: Workout[];
  errorMsg : string;

  constructor(public navCtrl: NavController,private   WService: WrokoutServiceProvider) {

  }

}
