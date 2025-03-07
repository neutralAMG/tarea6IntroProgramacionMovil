import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameToUniveritiesPage } from './name-to-univerities.page';

describe('NameToUniveritiesPage', () => {
  let component: NameToUniveritiesPage;
  let fixture: ComponentFixture<NameToUniveritiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NameToUniveritiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
