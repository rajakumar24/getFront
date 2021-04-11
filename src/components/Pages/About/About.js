import React from 'react'
import Header from '../../../Header/Header'
import Aux from '../../../../containers/hoc/Auxiliary/Aux';
import Footer from '../../Footer/Footer'
import './About.css'

const About = (props) => {
return(
   <Aux>
    
    <div className="About"><div className="AboutHead"><Header/></div></div>
     
    <h1>Hello</h1>
    <div className="About"><div className="AboutFooter"><Footer/></div></div>
    
    
    </Aux>
    );
}
export default About;