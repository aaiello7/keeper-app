import React, {useState} from "react";
import { isPropertySignature } from "typescript";

function Login (props) {
    const [name, setName] = useState("")
    const [buttonStyle, setHoverButton] = useState("btn")

    function handleChange(event) {
        setName(event.target.value);
    }

    function hoverEvent() {
        setHoverButton("btn-hover");
    }    
    function unHoverEvent() {
        setHoverButton("btn");
    }
    return (
        <div className="container">
            <h1>Hello {name}</h1>       
            <form 
                onSubmit={()=>{
                props.newLogin(name);
            }} className="form">
                <input 
                    onChange={handleChange}
                    className="loginForm"
                    type="text"
                    placeholder="Username"
                    value={name} 
                />
            <button className={buttonStyle} onMouseOver={hoverEvent} onMouseOut={unHoverEvent}>Login</button>
            </form>
        </div>
    )
}

export default Login;