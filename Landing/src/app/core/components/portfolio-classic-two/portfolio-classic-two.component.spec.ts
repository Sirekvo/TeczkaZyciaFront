import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassicTwoComponent } from './portfolio-classic-two.component';

describe('PortfolioClassicTwoComponent', () => {
  let component: PortfolioClassicTwoComponent;
  let fixture: ComponentFixture<PortfolioClassicTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioClassicTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioClassicTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
