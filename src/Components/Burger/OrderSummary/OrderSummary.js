import React from 'react';
import Auxilary from '../../../HOC/Auxilary';

const OrderSummary = props => {

    const ingreadiantsSummary = Object.keys(props.ingreadiants).map((igkey) => {
        return <li key={igkey+1}><span style = {{textTransform : 'capitalize'}}> {igkey} </span>: {props.ingreadiants[igkey]} </li>
    })
    
    return(
        <Auxilary>
            <h2 style={{textAlign:'center',fontSize:'30px'}}>Your Order</h2>
            <p>Your Happy Meal with your Cute Smile and some very tasty Fillings</p>
            <ul>
                {ingreadiantsSummary}
            </ul>
            <h4>Total Price : {props.sum.toFixed(2)}</h4>
            <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{backgroundColor:'blue'}}>Check Out</button>
                <button style={{backgroundColor:'red' ,height:'19px',width:'19px',textAlign:'center',position:'fixed',top:0,left:480}} onClick={props.closed}>x</button>
            </div>
        </Auxilary>
    )

};

export default OrderSummary;