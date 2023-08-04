import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, ReplaySubject } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _matchDetails: ReplaySubject<any> = new ReplaySubject();

  constructor(
    private _httpClient: HttpClient
  ) {}

   // match info
   set _matchInfo(info: any) {
    this._matchDetails.next(info);
  }

  get _matchInfo$(): Observable<any> {
    return this._matchDetails.asObservable();
  }

  getFixture(data : any):Observable<any>{
    let params = new URLSearchParams();
    for (let key in data) {
      params.set(key, data[key]);
    }

    return this._httpClient
      .get(environment.backendUrl + 'GetFixtures?' + params.toString(), {})
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }

  GetMarkets(data : any):Observable<any>{
    let params = new URLSearchParams();
    for (let key in data) {
      params.set(key, data[key]);
    }

    return this._httpClient
      .get(environment.backendUrl + 'GetMarkets?' + params.toString(), {})
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }
  getSelection(data : any):Observable<any>{
    let params = new URLSearchParams();
    for (let key in data) {
      params.set(key, data[key]);
    }

    return this._httpClient
      .get(environment.backendUrl + 'GetSelections?' + params.toString(), {})
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }

  BetBuilderBets(data : any):Observable<any>{
    let params = new URLSearchParams();
    for (let key in data) {
      params.set(key, data[key]);
    }
    return this._httpClient
      .get(environment.backendUrl + 'GetBetBuilderBets?' + params.toString(), {})
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }
}
