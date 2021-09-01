import {useState} from "react";

function WarningBanner(props) {
    if(!props.warn){
        return null;
    }
    
    return(
        <div style={warning}>
            Warning!
        </div>
    )
}

function Page() {

    const [showWarning, setShowWarning] = useState(true);

    const handleToggleClick = () =>{
        setShowWarning(!showWarning);
    }

    return (
        <div>
            <WarningBanner warn = {showWarning}/>
            <button onClick={handleToggleClick}>
                {showWarning ? "hide" : "show"}
            </button>
             
        </div>
    )
}

//   css in js

    const warning = {
        color: 'red',
        fontSize: '12px'

    }
export default Page
