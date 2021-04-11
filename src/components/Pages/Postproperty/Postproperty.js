import React from 'react'
import Header from '../../../Header/Header'
import Aux from '../../../../containers/hoc/Auxiliary/Aux';
import Footer from '../../Footer/Footer'
import './Postproperty.css'
import Pagemove from '../../Pagemove/Pagemove'



const Postproperty = (props) => {
return(
   <Aux>
    
    <div className="About"><div className="AboutHead"><Header/></div>
    <p className="postpara">Post Property</p> 
    <div className="postpara1"><Pagemove /></div>
    </div>
    
    <div className="About"><div className="AboutFooter"><Footer/></div></div>
    
    
    </Aux>
    );
}
export default Postproperty;