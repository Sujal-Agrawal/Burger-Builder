import React from 'react';
import BuildControl from './Build control/BuildControl';
import classes from './BurgerControl.css';
const BurgerControl =props =>{
 
    const control = [
        {label : 'Salad',type : 'Salad'},
        {label : 'Bacon',type : 'Bacon'},
        {label : 'Cheese',type : 'Cheese'},
        {label : 'Meat',type : 'Meat'},
    ]
    
    return(
        <div className={classes.BurgerControl}>
            <p>Current Price : <strong>{props.Price.toFixed(2)}</strong></p>
            {control.map((ingreadient) => (
               <BuildControl key={ingreadient.label} 
                             add={() => props.addStuff(ingreadient.type)} 
                             remove={() => props.removeStuff(ingreadient.type)}
                             values={props.Stuff[ingreadient.type]}
                             ingreadient={ingreadient.label}
                             Disable ={props.DisableInfo[ingreadient.type]} />  
            ))}
            <button className={classes.OrderButton} onClick={props.puchase_Stat} disabled={!props.Order}>Order Now</button> 

        </div>
        
    )

   
}

export default BurgerControl;