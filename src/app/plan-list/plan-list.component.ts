import { Component, OnInit } from '@angular/core';
// import { PlanService } from '../service/service.service';
// import { Plan } from '../bean/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans = [{
    name: '大熊',
    date: '2017-8-8',
    totalTime: 1,
    comment: '学习到天亮'
  }, {
    name: '大熊',
    date: '2017-8-8',
    totalTime: 1,
    comment: '学习到天亮'
  }];
  constructor() {}

  ngOnInit() {
    // this.plans = this.planService.getPlans();
  }
}
