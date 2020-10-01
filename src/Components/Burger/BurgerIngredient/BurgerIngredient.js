import React, { Component } from 'react';
import PropsType from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component{
    render(){
        
        let Ingredient = null;
        switch(this.props.type){
        
            case('BreadBottom'):
                Ingredient = <div className={classes.BreadBottom}/>;
                break;
            case('BreadTop'):
                Ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}/>
                    <div className={classes.Seeds2}/>
                </div>;
                break;
            case('Meat'):
                Ingredient = <div className={classes.Meat}/>;
                break;
            case('Cheese'):
                Ingredient = <div className={classes.Cheese}/>;
                break;
            case('Salad'):
                Ingredient = <div className={classes.Salad}/>;
                break;
            case('Bacon'):
                Ingredient = <div className={classes.Bacon}/>;
                break;
            default:
                Ingredient = null;
                break;
        }
        return Ingredient;
    }
}
BurgerIngredient.propTypes={
    type : PropsType.string.isRequired
};
export default BurgerIngredient;