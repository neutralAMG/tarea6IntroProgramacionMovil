import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryNameoFlagPage } from './country-nameo-flag.page';

describe('CountryNameoFlagPage', () => {
  let component: CountryNameoFlagPage;
  let fixture: ComponentFixture<CountryNameoFlagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNameoFlagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
