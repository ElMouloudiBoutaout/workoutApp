import { Workout } from '../../app/workout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WrokoutServiceProvider } from '../../providers/wrokout-service/wrokout-service';


@IonicPage()
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html',
})
export class WorkoutPage{

  private workouts : Workout[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private wService: WrokoutServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPage');
    console.log("maroc");
  }

  ngOnInit() {
    this.wService.getws().subscribe(response => {
    this.workouts = response;
     })
  }


}
