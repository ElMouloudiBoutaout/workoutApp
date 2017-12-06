import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import  'rxjs/add/Observable/throw'
import { Workout } from '../../app/workout';

/*
  Generated class for the WrokoutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WrokoutServiceProvider {


  private headers = new Headers({ 'Content-Type': 'application/json' });
  

  constructor(public http: HttpClient,@Inject('url') private url) {
    console.log('Hello WrokoutServiceProvider Provider');
  }


  getWorkouts(){
    return this.http.get(this.url)
    .map((response : Response) =>response = response.json())
    .catch(this.handleError);
  }
  getWorkout(id : number){
    return this.http.get(this.url+"/"+id)
    .map((response : Response) =>response = response.json())
    .catch(this.handleError);
  }
   createWorkout(Workout: Workout): Promise<Workout> {
    return this.http
      .post(this.url, JSON.stringify(Workout), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Workout)
      .catch(this.handleError);
  }
  deleteWorkout(Workout : Workout){
    return this.http.delete(this.url+"/"+Workout.id).
    map((response : Response)=>response = response.json())
    .catch(this._ErrorHandler);
  }
  updateWorkout(Workout : Workout)  {
    return this.http.put(this.url+"/"+Workout.id,JSON.stringify(Workout),{headers : this.headers})
    .map((response : Response)=>console.log(response))
    .catch(this.handleError);
  }

    _ErrorHandler(error : Response){
    console.log("error" +error);
    return Observable.throw(error || "Server Error");
  }


}
