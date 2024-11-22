import React, {useState} from 'react';

function Button() {
    let [amt, setAmt] = useState(0);
    const increment = () => { setAmt(amt += 1); }

    return(
        <button className="btn" onClick={increment}> Clicks: {amt}</button>
    )
}

export default Button;