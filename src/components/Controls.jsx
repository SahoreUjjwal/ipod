
export function Controls(props){
    const {onRotate,onSelect} = props;
    return(
        <div className="controls-container">
            <div onMouseOver={onRotate} id="controls-outer" className = "controls-outer">
                <button className="Menu-button">Menu</button>
                <button className = "forward-button">f</button>
                <button className ="backward-button">B</button>
                <button className="play">p</button>
                <button onClick={onSelect} className="center-button">OK</button>
            </div>
        </div>
    )
}