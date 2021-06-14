import React from 'react';
import { Button } from './Button';

function Site(props) {
    return (
        <div className='brief__container' >
            <div className='site__wrapper' >
                <div className='site__content' >
                    <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    path={props.path}>
                        View Website
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Site
