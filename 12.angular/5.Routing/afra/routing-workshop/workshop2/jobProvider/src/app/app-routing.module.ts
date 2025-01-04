import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path:'interviewList',component:InterviewListComponent},
  {path:'jobList',component:JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
