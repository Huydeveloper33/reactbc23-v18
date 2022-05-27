import React from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../../_Component/HeaderHome"



export const LoginTemplate = (props) => {

    return <Route exact path={props.path} render={(propsRoute) => {//props,{path:'/',component:{HomePage}}
        return <div>
            <HeaderHome />
            <props.component {...propsRoute}/>
            
        </div>
    }} />
}