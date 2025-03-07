import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordpressNewsPage } from './wordpress-news.page';

describe('WordpressNewsPage', () => {
  let component: WordpressNewsPage;
  let fixture: ComponentFixture<WordpressNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
