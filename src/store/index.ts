import { combineReducers } from "redux" 
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";


//app leri genelde  boyle yapariy
interface AppState {
    user:UserState;
    categories:any;
    records:any;
}

//burada kullanici  category records yapariz
//tutacagimiz degiskenleri genel olrak reducer
const rootReducer = combineReducers<AppState>({
    user:userReducer,
    categories:()=>{},
    records:()=>{}
})
export default rootReducer

//genel ayarlamalar yyaptiktan saonra genel olan index.tsx gidilip tanitiruz
//sonra store bagladik sonra reducer user ts dosyayi aciop devamrediyoeruy