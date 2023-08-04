import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../home.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-match-detailes',
  templateUrl: './match-detailes.component.html',
  styleUrls: ['./match-detailes.component.scss'],
})
export class MatchDetailesComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  matchDetails : any;
  selection : any = [];
  legs : any = [];
  selectedSelection : any;
  selectedLeg : any;
  displayedColumns: string[] = ['pick','keyStats', 'market', 'outcome'];
  dataSource :any = [];
  betBuilderDetails : any;
  loaderShow : boolean = false;

  constructor(private _homeService : HomeService, private router : Router){
    this.dataSource = new MatTableDataSource([]);
  }
  ngOnInit(): void {
    this._homeService._matchInfo$.pipe(takeUntil(this._unsubscribeAll)).subscribe(
      (match: any) => {
        if(match){
          this.matchDetails = match;
        }
      })
      if(!this.matchDetails){
        this.router.navigate(['/'])
      }
      this.getMarkets();
      this.getSelection();
  }

  getSelection(){
    let params = {
      sports : 1
    }
    this.loaderShow = true;
    this._homeService.getSelection(params).subscribe((response) => {
      this.legs = response;
      this.loaderShow = false;
    })
  }

  getMarkets(){
    let params = {
      sports : 1
    }
    this.loaderShow = true;
    this._homeService.GetMarkets(params).subscribe((response) => {
      this.selection = response;
      this.loaderShow = false;
    })
  }

  BetBuilderBets(value:any, type:any){
    if(type === 'selection'){
     this.selectedSelection = value;
    }
    if(type === 'leg'){
      this.selectedLeg = value;
    }
    let params:any = {
      sports : 1,
      matchId : this.matchDetails?.MatchId,
      language : 'en',
      legs  : this.selectedLeg,
      marketId : this.selectedSelection
    }
    if(this.selectedSelection && this.selectedLeg){
      this.loaderShow = true;
    this._homeService.BetBuilderBets(params).subscribe((response) => {
      if(response){
        this.betBuilderDetails = response;
        this.dataSource = new MatTableDataSource(response.BetBuilderSelections);
      }
      this.loaderShow = false;
    })
  }
  }

  ngOnDestroy(): void {
    this.matchDetails = null;
  this.selection  = [];
  this.legs = [];
  }
}
