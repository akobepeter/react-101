 import {useState} from 'react'

function HandleEvents() {

    const [isToggleOn,setIsToggleOn] = useState(true);
    const [color, setColor] = useState(['green','red']);
    console.log(color);
    

    

    const handleClick = () =>{


        setIsToggleOn(!isToggleOn); 
        setColor(!color); 
    }

    return (

        <div>

           <button onClick={handleClick}>Click me</button>
           {isToggleOn ? 'ON' : 'OFF'}
           <p style={{backgroundColor:"green"}}>{color ? "green" : "red"}</p>

        </div>
    )
}

export default HandleEvents
