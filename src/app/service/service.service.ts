import { Injectable } from '@angular/core';
import { Plan } from '../bean/plan';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  plans: Plan[];
  constructor() {
    this.plans = this.plans = [
      { id: 11, name: '大熊', date: 100000, totalTime: 1, comment: '学习到天亮' },
      { id: 22, name: '大熊', date: 100000, totalTime: 1, comment: '学习到天亮' },
      { id: 33, name: '大熊', date: 100000, totalTime: 1, comment: '学习到天亮' }];
  }
  getPlans() { return this.plans; }
  addPlan( newplan: Plan ) { this.plans.push(newplan); }
  deletePlan( id: number ) {
    let index = 0;
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id ) {
        index = i;
        break;
      }
    }
    this.plans.splice( index, 1);
  }
  getPlan( id: number ) {
    for (let i = 0; i < this.plans.length; i++) {
      if (this.plans[i].id === id) {
        return this.plans[i];
      }
    }
  }
}
