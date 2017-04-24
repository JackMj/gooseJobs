import {ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
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

const appRouts:Routes = [

    {
        path:'',
        component:JobsComponent
    },
    {
        path:'learner',
        component:LeanershipsComponent
    },
    {
        path:'intern',
        component:InternsComponent
    },
    {
        path:'interViewTip',
        component:InterviewTipsComponent
    },
    {
        path:'cvTips',
        component:CvTipsComponent
    }
    ,
    {
        path:'detail/:id',
        component:JobDetailComponent
    }
]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouts)