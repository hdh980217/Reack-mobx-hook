import React from 'react';
import NumberStore from '../modules/numberStore';

const Gpp = () => {
    return (
        <div id='container4'>
            <h1>Gpp</h1>
            <p>1번 값 : {NumberStore.num}</p>           
        </div>
    )
}

export default Gpp;