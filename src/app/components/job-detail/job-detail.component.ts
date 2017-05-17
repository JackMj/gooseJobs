import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Service} from '../../service/service';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
  providers:[Service]
})
export class JobDetailComponent {

  jobs
  title
  location
  salary
  company
  message
  lat
  lng
  
  constructor(private _route:ActivatedRoute,private router:Router,private _service :Service) 
  {
    this.title = "";
    this.location ="";
    this.salary ="";
    this.company = "";
    this.lat = -26.195246;
    this.lng = 28.034088;
    
    this._route.params.subscribe((params) =>
    {
      let id = params['id'];
      this._service.getJobDetails(id).then(data=>{
      this.jobs = data.val();

      this.title = data.val().title;
      this.location = data.val().location;
      this.salary = data.val().salary;
      this.company = data.val().company;

        
       console.log(this.jobs);
      }).catch(err=>{
      console.log(err);
      })
   
    })

   
  }

}
