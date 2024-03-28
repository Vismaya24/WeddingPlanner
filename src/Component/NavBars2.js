import React from "react";
import {Link} from "react-router-dom"
import  ReactDOM  from "react";
import './styling.css';
class NavBars2 extends React.Component
{
    render()
    {
        const myStyle1={
            backgroundcolor:'black',
            position:'fixed',
            
        };   
        return(
            <div className="body2">
                <div className="header2">
                    <div className="container2">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="logoBlack.png" alt="" height="100px" width="200px"></img>
                    <Link to="/"><img src="H.png" alt="" height="40px" width="80px"></img></Link>
                    <Link to="/photography"><img src="P.png" alt="" height="40px" width="180px"></img></Link>
                    <Link to="/venue"><img src="V.png" alt="" height="40px" width="90px"></img></Link>
                    <Link to="/Catering"><img src="C.png" alt="" height="40px" width="130px"></img></Link>
                    <Link to="/Makeover"><img src="M.png" alt="" height="40px" width="170px"></img></Link>
                    <Link to="/gallery"><img src="G.png" alt="" height="40px" width="120px"></img></Link>
                    <Link to="/about"><img src="A.png" alt="" height="40px" width="130px"></img></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBars2;