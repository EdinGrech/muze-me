import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedPostsPage } from './saved-posts.page';

describe('SavedPostsPage', () => {
  let component: SavedPostsPage;
  let fixture: ComponentFixture<SavedPostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavedPostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
