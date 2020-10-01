import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props =>(
        <div className={classes.BuildControl}>
                <h4 className={classes.Label }>{props.ingreadient}</h4>
                <button className={classes.Less} onClick={props.remove} disabled={props.Disable}>-</button>
                <div className={classes.Units}>{props.values}</div>
                <button className={classes.More} onClick={props.add} >+</button>
                
        </div>
)

export default BuildControl;