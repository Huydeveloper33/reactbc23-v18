import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, USER_LOGIN } from '../../util/setting';

const initialState = {
userLogin:{},
}

const nguoiDungReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
      dangNhap:(state,action)=>{
          console.log(action);

      }
  }
});

export const {dangNhap} = nguoiDungReducer.actions

export default nguoiDungReducer.reducer



// --------------------------action thunk-------------------------------------


//userLogin={taiKhoan:'',matKhau:''}
export const dangNhapApiAction =  (userLogin)=>{
    
    return async dispatch =>{
       try {
           let result = await http.post('/api/quanlynguoidung/dangnhap',userLogin)
           console.log('result',result);
           //Lưu lại token khi đăng nhập thành công
           let usLoginResult = result.data.content;
           //Lưu thông tin vào localStorage sau khi đăng nhập thành công
           localStorage.setItem(USER_LOGIN,JSON.stringify(usLoginResult));
           //Lưu token của user vào localStorage khi đăng nhập thành công
           localStorage.setItem(ACCESSTOKEN,usLoginResult.accessToken)
           //Sau khi gán localStorage xong thì đưa dữ liệu lên redux

        //    const action ={
        //        type:'userReducer/dangnhap',
        //       payload: usLoginResult
        //    }
           const action =dangNhap(usLoginResult);
           dispatch(action)


       } catch (err) {
           console.log(err.response?.data);
           //optional chaining :(respone?)
           
       }
    }
}



