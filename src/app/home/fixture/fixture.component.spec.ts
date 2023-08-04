import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureComponent } from './fixture.component';

describe('FixtureComponent', () => {
  let component: FixtureComponent;
  let fixture: ComponentFixture<FixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixtureComponent]
    });
    fixture = TestBed.createComponent(FixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
