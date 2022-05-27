import React from "react"
import { Route } from "react-router-dom"
import HeaderHome from "../../_Component/HeaderHome"



export const HomeTemplate = (props) => {

    return <Route exact path={props.path} render={(propsRoute) => {//props,{path:'/',component:{HomePage}}
        return <div>
            <HeaderHome />
            <props.component {...propsRoute}/>
            <footer
                className="bg-dark text-white p-5 
                font-weight-bold text-center">Copy right @Cybersoft</footer>
        </div>
    }} />
}