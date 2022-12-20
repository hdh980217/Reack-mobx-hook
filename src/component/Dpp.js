import React from 'react';
import AgeStore from '../modules/ageStore';

const Dpp = () => {
    return (
        <div id='container4'>
            <h1>Dpp</h1>
            <p>2번 값 : {AgeStore.age}</p>
            
        </div>
    )
}

export default Dpp;