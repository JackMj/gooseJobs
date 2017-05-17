import {
  Component,
  OnInit
} from '@angular/core';
import {
  Service
} from '../../service/service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [Service]
})
export class JobsComponent {

  jobs
  key = []
  constructor(private todoService: Service) {

    let promise = todoService.getJobs();
    promise.then(snapshot => {
    this.jobs = snapshot.val();
    var listJobs = snapshot.val();
      // console.log(listJobs);
    })
    this.getKeys();

  }
  ngAfterViewInit() {
    this.getKeys();
  }
  getKeys() {
    try {
      this.key = Object.keys(this.jobs);
      //console.log(this.key);  
    } catch (e) {
      // console.log(e);      
    }
    return this.key;
  }

}