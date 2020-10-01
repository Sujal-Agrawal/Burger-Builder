import React from 'react';
import classes from './Header.css';
import Burger from '../../Assests/Image/hamburger.webp';
import Facebook from '../../Assests/Image/facebook.webp';
import Instagram from '../../Assests/Image/instagram.webp';
import Twitter from '../../Assests/Image/twitter.png';

const Header = props =>(

        <div className={classes.Header}> 
            <img src={Burger}  className={classes.Image} alt={"Burger"}/> 
            <img src={Facebook} className={classes.FaceBook} alt={"Facebook"}/> 
            <img src={Instagram} className={classes.Instagram} alt={"Instagram"}/>
            <img src={Twitter} className={classes.Twitter} alt={"Twitter"}/> 

            <div className={classes.H1}>Burger Assemble</div>
            <div className={classes.H5}>An Burger a Day Keeps Your Hunger Away</div>
        </div>

    
)

export default Header;