import ZingTouch from "zingtouch";


export function Controls(){


    var touchArea = document.getElementById('controls-outer');
    var myRegion = new ZingTouch.Region(touchArea);
    
    myRegion.bind(touchArea, 'rotate', function(e){
        console.log(e.detail);
    });

    return(
        <div className="controls-container">
            <div id="controls-outer" className = "controls-outer">
                <button className="Menu-button">Menu</button>
                <button className = "forward-button">f</button>
                <button className ="backward-button">B</button>
                <button className="play">p</button>
                <button className="center-button">OK</button>
            </div>
        </div>
    )
}