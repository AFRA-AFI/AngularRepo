import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { RouterModule,Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    InterviewListComponent,
    JobsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
