import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailesComponent } from './match-detailes.component';

describe('MatchDetailesComponent', () => {
  let component: MatchDetailesComponent;
  let fixture: ComponentFixture<MatchDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchDetailesComponent]
    });
    fixture = TestBed.createComponent(MatchDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
