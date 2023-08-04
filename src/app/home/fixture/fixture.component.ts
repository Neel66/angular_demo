import { Component,OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {
  dates : Array<any> = [];
  datesCount : any = 7;
  currentDate : Date = new Date();
  fixture : Array<any> = [];
  selectedDate :  Date = new Date();
  loaderShow : boolean = false;
  constructor(private _homeService : HomeService, private route : Router){
    
  }

  ngOnInit(): void {
    this.getDates();
    this.getFixture(this.currentDate);
  }

  getDates(){
    for (let index = 0; index < this.datesCount; index++) {
      const nextDate = new Date(this.currentDate);
      nextDate.setDate(this.currentDate.getDate() + index);
      this.dates.push(nextDate);
    }
  }

  getFixture(date : Date){
  let params = {
    sports : 1
  }
  this.selectedDate = date;
  this.fixture = [];
  this.loaderShow = true;
  this._homeService.getFixture(params).subscribe((response) => {
    if(response){
       this.getCurrentDateFixture(date, response)
    }else{
      console.error(response)
    }
    this.loaderShow = false;
  })
  }

  getCurrentDateFixture(date : Date, data : Array<any>){
      if(date && data && data.length){
      //let currentDate = date.toLocaleString()
      let matchName:any = {};
      for (let item of data){
        let type = item.LeagueName
        if (matchName[type] == undefined){
          matchName[type]= []
        }
        const matchDate = new Date(item.MatchDate);
      if(date && matchDate.getDate() === date.getDate() && matchDate.getMonth() === date.getMonth() && date.getFullYear() === matchDate.getFullYear()){
        matchName[type].push(item);
        matchName[type].sort((a:any,b:any) => {
          return a - b;
        }) 
      }
      }
      this.fixture = matchName;
  }
}
getMatchInformation(data:any){
   if(data){
    this._homeService._matchInfo = data;
    this.route.navigate(['/matchInformation'])
   }
}
}
