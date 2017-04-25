import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Service} from '../../service/service'

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers:[Service]
})
export class JobDetailComponent {

  jobs;
  workers;
  constructor(private _route:ActivatedRoute,private router:Router,private _service :Service) 
  {
    
    this._route.params.subscribe((params) =>
    {
      let id = params['id'];
      console.log(id);
      this._service.getJobDetails(id).then(data=>{
       this.jobs = data.val();
       console.log(this.jobs);
      }).catch(err=>{
      console.log(err);
      })
   
    })

   
  }

}
