import React from 'react';
import classes from './Burger.css'
import BurgerIngrediant from './BurgerIngredient/BurgerIngredient'

const Burger = props =>{
    let tranformedSTUFFS = Object.keys(props.Stuffs).map(igKey =>{
        
        return [...Array(props.Stuffs[igKey])].map((_,i)=>{
            return <BurgerIngrediant key={igKey+i} type={igKey}/> ;
        });
        
    }).reduce((arr ,el)=>{
        return arr.concat(el);
    },[]);

    if(tranformedSTUFFS.length===0)
    {
        tranformedSTUFFS=<p>Please select your fillings which make you day a Beautiful and Happy one</p>
    }
    return(
        <div>
            <div className ={ classes.menu }>Menu<nav className = {classes.navigation}> nav .. ... </nav></div>
            
            <div className={classes.Burger}>
                <BurgerIngrediant type='BreadTop'/>
                {tranformedSTUFFS}
                <BurgerIngrediant type='BreadBottom'/>
            </div>
            <div className={classes.ButtonContainer}>
                <button className={classes.Button} onClick={props.reset}>Reset Ingrediant</button>
            </div>
        </div>
    )

};

export default Burger;