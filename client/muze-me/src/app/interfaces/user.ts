export interface User {
  username: string;
  email: string;
  news_tollerance: number | 0;
}

export interface UserLoginInterface {
  email: string;
  password: string;
}

export interface UserRegisterInterface {
  username: string;
  email: string;
  password: string;
  tollerance: number | 0;
}

export interface UserSignUpResponse {
  status: number;
  email: string | [string];
  username: string | [string];
  password: string | [string];
}
