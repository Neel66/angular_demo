import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRouting } from './home.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FixtureComponent } from './fixture/fixture.component';
import { MatchDetailesComponent } from './match-detailes/match-detailes.component';
@NgModule({
  declarations: [
    HomeComponent,
    FixtureComponent,
    MatchDetailesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRouting), 
    SharedModule
  ]
})
export class HomeModule { }
