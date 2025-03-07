import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameToAgePage } from './name-to-age.page';

describe('NameToAgePage', () => {
  let component: NameToAgePage;
  let fixture: ComponentFixture<NameToAgePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NameToAgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
