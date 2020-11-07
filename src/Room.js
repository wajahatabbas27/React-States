import React, { useState } from 'react';
import './Room.css';

function Room() {
    const [isLit, setLit] = useState(true);
    let [add, addfunc] = useState(18);
    return (
        <div className={`room ${isLit? 'lit' : 'dark'}`}>        {/* for styling purpose*/}
            The light of room is {isLit ? 'lit' : 'dark'}
            <br />
          The age of AZ is {add}
            <br />
            <button onClick = {() => {
                setLit(!isLit);
                console.log('Light switch')
            }}>
                Light Switch
        </button>
            <br />
            <button onClick = { () =>{
                addfunc(++add);
                console.log("Add button clicked")
            }}>
                Add Switch
        </button>
        </div>
    );
}

export default Room;
