import { List } from "./LIst";
export function Screen(props){

    var {state} = props;

    return(
        <div className="ipod-screen">
            <List state={state}/>
        </div>
    )
}