export interface User {
    username : string;
    email : string;
    password : string;
    tollerance : number | null;
}

export interface UserSignUpResponse {
    status: number;
    email: string | [string];
    username: string | [string];
    password: string | [string];
}
