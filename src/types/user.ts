export interface User {
    message:string;
    username:string;
    email:string;
    full_name:string;
    token:string;
}
export interface UserState {
    data:User;
    loading:boolean;
    error:string;    
}

//login olurken dispatch olusturmak
interface LOGIN_START {
    type:'LOGIN_START'

}
interface LOGIN_SUCCESS {
    type:'LOGIN_SUCCES';
    payload:User;

}
interface LOGIN_ERROR {
    type:'LOGIN_ERROR';

}

//UCUNU BIRLESTIRMEK GEREKIR
export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR
