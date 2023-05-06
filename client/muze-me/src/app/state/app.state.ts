import { UserState } from './user/user.reducer';
import { NewsState } from './news/news.reducer';
import { NewsPostState } from './post/post.reducer';
export interface AppState {
  auth: UserState;
  news: NewsState;
  post: NewsPostState;
}
