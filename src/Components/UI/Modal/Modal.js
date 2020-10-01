import React from 'react';
import Auxilary from '../../../HOC/Auxilary';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const Modal =  props => (
    <Auxilary>
        <BackDrop show={props.show} clicked={props.modelClose} />
    <div  className={classes.Modal} style={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                            opacity : props.show ? '1' : '0'}}>
        {props.children}
    </div>
    </Auxilary>
)

export default Modal;