import React, { Fragment } from 'react';
import Loading from './loading.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img 
                src={Loading} 
                alt="Loading..." 
                style={{ fontSize: '200px', margin: 'auto', display: 'block' }} 
            />
        </Fragment>
    )
}

export default Spinner;