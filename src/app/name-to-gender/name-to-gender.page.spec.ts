import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameToGenderPage } from './name-to-gender.page';

describe('NameToGenderPage', () => {
  let component: NameToGenderPage;
  let fixture: ComponentFixture<NameToGenderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NameToGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
