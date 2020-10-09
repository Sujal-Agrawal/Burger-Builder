import React from 'react';
import classes from './Header.css';
import Burger from '../../Assests/Image/hamburger.webp';
import Facebook from '../../Assests/Image/facebook.webp';
import Instagram from '../../Assests/Image/instagram.webp';
import Twitter from '../../Assests/Image/twitter.png';
import {Animated} from "react-animated-css";

const Header = props =>(

        <div className={classes.Header}> 
            <Animated animationIn="rotateInUpLeft"  isVisible={true}>
                <img src={Burger}  className={classes.Image} alt={"Burger"}/> 
            </Animated>
            
            <Animated animationIn="bounceInLeft"  isVisible={true}>
                <img src={Facebook} className={classes.FaceBook} alt={"Facebook"}/> 
                <img src={Instagram} className={classes.Instagram} alt={"Instagram"}/>
                <img src={Twitter} className={classes.Twitter} alt={"Twitter"}/>
            </Animated>
             
            <Animated animationIn="bounceInLeft"  isVisible={true}>
                <div className={classes.H1}>Burger Assemble</div>
            </Animated>
            
            <Animated animationIn="slideInLeft"  isVisible={true}>
                <div className={classes.H5}>An Burger a Day Keeps Your Hunger Away</div>
            </Animated>    
    
        </div>

    
)

export default Header;