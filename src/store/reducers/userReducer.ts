//burada kullanicidan gelen bilgiler burada isleyecegiy
//temelde boyle kurdugumuydan hata aliriy sepep satae ve actiom type girilmediginden
//temel kurulumfdan sonra typede user dosyadsi actik 
//trpe yaptik burda statet yazariz
//sonra action geceriz uc asama oliiuur kullanici bilgi alirken start succes error uc asama olir bunu bend etped duyenleriz

import { User, UserAction, UserState } from "../../types/user"

//sonra bunu yapariz burada data as verek hatayi ortadan kaldiriy 
//burada bunu userstae esirleriy be her yuklemdifginde bununla baslar
//sonra insec icinsdeki user gideriz 
//datayi bos verdik basta yuklenirken bos olsun diye

const defaultState : UserState = {
    data:{} as User,
    loading:false,
    error:''

}


const userReducer = (state:UserState = defaultState,action:UserAction)=>{
    return state
}

export default userReducer