import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NvaComponent } from './nva/nva.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PlanListComponent } from './plan-list/plan-list.component';
// import { PlanService } from './service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    NvaComponent,
    NavigationComponent,
    HomeComponent,
    PlanListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'plan-list', component: PlanListComponent},
        ],
    )
  ],
  // providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
