import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { WorkoutPage } from '../workout/workout';
import { AddWorkoutPage } from '../add-workout/add-workout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WorkoutPage;
  tab2Root = AddWorkoutPage;
             
  tab3Root = ContactPage;
  constructor() {

  }
}
