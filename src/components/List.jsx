import { Component } from "react";

export class List extends Component{
        
    render(){
    const {state} = this.props;
    return(
        <>
            {state.activePage==="Home"?(
                <div>
                    <ul>
                        {state.homeList.map((item,index)=>(
                            <li className={state.activeItem===item?"highlight":""} key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ):state.activePage==="Music"?(<div>
                <ul>
                    {state.musicMenu.map((item,index)=>(
                        <li className={state.activeItem===item?"highlight":""} key={index}>{item}</li>
                    ))}
                </ul>
        </div>):state.activePage==="Games"?<Games/>:state.activePage==="Settings"?<Settings/>:
            state.activePage==="Artists"?<Artists/>:state.activePage==="All Songs"?<AllSongs/>:
            state.activePage==="Albums"?<Albums/>:<></>
        }

        </>
    )
}}