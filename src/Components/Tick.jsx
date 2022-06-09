import React from 'react';

function Tick() {
    return(
        <div>
            <h2>{new Date(). toLocaleTimeString()}</h2>
        </div>
    );
}

setInterval(Tick, 1000);

export default Tick;