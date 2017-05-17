import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routings';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { InternsComponent } from './components/interns/interns.component';
import { LeanershipsComponent } from './components/leanerships/leanerships.component';
import { PostsComponent } from './components/posts/posts.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { InterviewTipsComponent } from './components/interview-tips/interview-tips.component';
import { CvTipsComponent } from './components/cv-tips/cv-tips.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { FacebookModule } from 'ngx-facebook';
import { FbPostsComponent } from './components/fb-posts/fb-posts.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumboComponent,
    JobsComponent,
    InternsComponent,
    LeanershipsComponent,
    PostsComponent,
    TestimonialsComponent,
    InterviewTipsComponent,
    CvTipsComponent,
    JobDetailComponent,
    FbPostsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYpMnORNcUuV9oYqDSirXOiYPkXqUzpGQ'
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
