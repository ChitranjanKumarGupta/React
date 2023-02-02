import React, { useState } from "react";

export default function About(){

    const [myStyle, setMyStyle] = useState( {
        color: 'black',
        backgroundColor: 'white'
    }) 

    const [btntext, setBtnText] = useState('Enable Dark Mode');

    const toggleStyle = () =>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid white'
            })
            setBtnText('Enable Dark Mode');
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode');
        }
    }
    return (
        <>
            <div className="container" style={myStyle}>
                <h1>About Our Website</h1>
                <p>Hello this website is use for word conversion</p>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </>
    )
}