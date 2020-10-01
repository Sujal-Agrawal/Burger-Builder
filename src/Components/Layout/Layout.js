import React from 'react';
import Auxilary from '../../HOC/Auxilary';

const layout = props =>(
        
    <Auxilary>
        {/* <div> ToolBar , SideDrawer , BackDrop </div> */}
        <main>{props.children}</main>
    </Auxilary>
    

)

export default layout;