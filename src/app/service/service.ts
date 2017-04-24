import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
declare var firebase;


@Injectable()
export class Service{

  public getJobs()
  {
      return firebase.database().ref('jobs').once('value');
  }
   public saveJob(job)
  {
      return firebase.database().ref("/jobs/").push(job).once("value");
  } 
  public getKidsDetails(id:string)
  {
      return firebase.database().ref('jobs/'+id).once('value');
  }
  


}