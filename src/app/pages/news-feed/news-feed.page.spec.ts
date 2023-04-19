import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsFeedPage } from './news-feed.page';

describe('NewsFeedPage', () => {
  let component: NewsFeedPage;
  let fixture: ComponentFixture<NewsFeedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
