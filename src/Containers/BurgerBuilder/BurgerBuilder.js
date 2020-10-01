import React, { Component } from 'react';
import Auxilary from '../../HOC/Auxilary';
import Burger from '../../Components/Burger/Burger';
import BurgerControl from '../../Components/Burger/Burger control/BurgerControl';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const STUFFS_PRICE = {
    Salad:0.5,
    Bacon:0.4,
    Cheese:1.3,
    Meat:0.7,        
}
class BurgerBuilder extends Component
{
    state = {
        stuffs:{
            Salad:0,
            Bacon:0,
            Cheese:0,
            Meat:0,
        },
        TotalPrice:0,
        purchasable :false,
        Modal_State :false
    }

    updatePurchaseState (matter){
        
        const sum = Object.keys(matter).map(i => {
            return matter[i];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);

        this.setState({
            purchasable: sum>0
        })

    }
    
    addStuffHandler = (type) =>{
       const oldCount = this.state.stuffs[type];
       const updatedCount = oldCount+1;
       const updateStuffs = {...this.state.stuffs};
       updateStuffs[type]=updatedCount;
       const priceAddition = STUFFS_PRICE[type];
       const oldPrice = this.state.TotalPrice;
       const newPrice = oldPrice + priceAddition;
       this.setState({
           stuffs:updateStuffs,
           TotalPrice:newPrice
       })
       this.updatePurchaseState(updateStuffs);
    }
    
    removeStuffHandler = (type) =>{
        const oldCount = this.state.stuffs[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1;
        const updateStuffs = {...this.state.stuffs};
        updateStuffs[type]=updatedCount;
        const priceSubtracting = STUFFS_PRICE[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice - priceSubtracting;
        this.setState({
            stuffs:updateStuffs,
            TotalPrice:newPrice
        })
       this.updatePurchaseState(updateStuffs);

    }

    purchaseHandler = () => {
        this.setState({Modal_State : true});
    }

    modelVisibilityHandler = () => {
        this.setState({Modal_State : false});
    }

    resetHandler= () =>{
        const oldStuffsDetail={
            ...this.state.stuffs
        }
        for(let key in oldStuffsDetail){
            oldStuffsDetail[key]=0;
        }
        this.setState({
            stuffs:oldStuffsDetail,
            TotalPrice:0,
            purchasable:false,
            Modal_State: false
        })

    }

    render(){
        const disableInfo ={
            ...this.state.stuffs
        };
        for(let i in disableInfo){
            disableInfo[i] = disableInfo[i] <= 0;
        }
        
        return(
            <Auxilary>
                <Modal show={this.state.Modal_State} modelClose={this.modelVisibilityHandler}>
                    <OrderSummary ingreadiants={this.state.stuffs} closed={this.modelVisibilityHandler} sum={this.state.TotalPrice}/>
                </Modal>
                <Burger Stuffs={this.state.stuffs} reset={this.resetHandler} /> 
                <BurgerControl addStuff = {this.addStuffHandler} DisableInfo={disableInfo} puchase_Stat={this.purchaseHandler} removeStuff={this.removeStuffHandler}  Stuff={this.state.stuffs} Price={this.state.TotalPrice} Order={this.state.purchasable}/>
            </Auxilary>
        )
    }
    
}

export default BurgerBuilder;