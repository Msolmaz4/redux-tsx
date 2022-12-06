import { combineReducers } from "redux" 


//app leri genelde  boyle yapariy
interface AppState {
    user:any;
    categories:any;
    records:any;
}

//burada kullanici  category records yapariz
//tutacagimiz degiskenleri genel olrak reducer
const rootReducer = combineReducers<AppState>({
    user:()=>{},
    categories:()=>{},
    records:()=>{}
})
export default rootReducer

//genel ayarlamalar yyaptiktan saonra genel olan index.tsx gidilip tanitiruz