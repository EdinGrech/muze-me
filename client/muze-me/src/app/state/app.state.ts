import { UserState } from './user/user.reducer';
import { NewsState } from './news/news.reducer';
export interface AppState {
  auth: UserState;
  news: NewsState;
}
