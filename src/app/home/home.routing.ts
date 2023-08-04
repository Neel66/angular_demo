
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailesComponent } from './match-detailes/match-detailes.component';
import { FixtureComponent } from './fixture/fixture.component';

export const HomeRouting: Routes = [
  {
    path: '',
    component : FixtureComponent
  },
  {
    path : 'matchInformation',
    component : MatchDetailesComponent
  }
];

