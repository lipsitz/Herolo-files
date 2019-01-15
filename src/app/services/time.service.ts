import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TimeService {
 public time: string;
 public yearTime: string;
 public yearTimeNumber: Number;
 public yearsArray: number[];
  
 constructor(private datePipe: DatePipe) {
    this.yearsArray = []
  }
 

 public getYearsArray(): number[] {
    this.time = this.datePipe.transform(new Date());
    this.yearTime = new DatePipe('en-US').transform(this.time, 'y');
    this.yearTimeNumber = Number(this.yearTime);
    for (let i = 1900; i <= this.yearTimeNumber; i++) {
      this.yearsArray.unshift(i);
    }
    return this.yearsArray
  }
}
