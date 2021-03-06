import React, { useState } from 'react'
import ModalHOC from '../../HOC/ModalHOC'
import Login from '../LoginPage/Login'
import LoginPage from '../LoginPage/Login'

export default function HocDemo(props) {

  // const ModalHocLoginPage = new ModalHOC(LoginPage)
  const [component,setComponent] = useState(<p>Default Component</p>)
  return (
    <div>
      <button className="btn btn-success"
        data-toggle="modal"
        data-target="#modelId"
        onClick={()=>{
          setComponent(<p>Đăng ký</p>)
        }}>Đăng ký</button>
      <button className="btn btn-primary"
        data-toggle="modal"
        data-target="#modelId"
        onClick={()=>{
          setComponent (<LoginPage/>)
        }}>Đăng nhập</button>
      <ModalHOC modalContent={component} />
      {/* <ModalHocLoginPage/> */}
    </div>
  )
}
