import { Component, OnInit } from '@angular/core';
import {Service} from '../../service/service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[Service]
})
export class PostsComponent implements OnInit {

  private tasks ={}
  title
  location
  salary
  company
  message
  constructor(private jobService:Service)
  {
    this.title = "";
    this.location ="";
    this.salary ="";
    this.company = "";
  }

  ngOnInit() 
  {

  }
 
  submit()
  {
    
   let job = {title:this.title,
            location:this.location,
            salary:this.salary,
             company:this.company}

   let promise = this.jobService.saveJob(job) 
   promise.then(snap=>{
   this.message = "sucess"
   console.log(snap.val())
  }).catch(function(e)
  {
    console.log(e)
    this.message = "error";
  });
  }

}
