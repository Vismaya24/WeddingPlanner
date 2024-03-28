import {Link} from "react-router-dom"
import React from "react"

import Photography from "./photography"
import './styles.css';
class NavBars extends React.Component
{
    render()
    {
        const myStyle1={
            backgroundcolor:'black',
            position:'fixed',
            
        };   
        return(
            <body>
                <header>
                    <img src="logoBlack.png" height="80px" width="220px"></img>
                    <Link to="/">&emsp;&emsp;<img src="H.png" alt="" height="40px" width="80px" className="h"></img></Link>
                    <Link to="/photography">&emsp;&emsp;<img src="P.png" alt="" height="40px" width="180px" className="h"></img></Link>
                    <Link to="/venue">&emsp;&emsp;<img src="V.png" alt="" height="40px" width="90px" className="h"></img></Link>
                    <Link to="/Catering">&emsp;&emsp;<img src="C.png" alt="" height="40px" width="130px" className="h"></img></Link>
                    <Link to="/Makeover">&emsp;&emsp;<img src="M.png" alt="" height="40px" width="170px" className="h"></img></Link>
                    <Link to="/gallery">&emsp;&emsp;<img src="G.png" alt="" height="40px" width="120px" className="h"></img></Link>
                    <Link to="/AboutUs">&emsp;&emsp;<img src="A.png" alt="" height="40px" width="130px" className="h"></img></Link>

                </header>
            </body>
        )
    }
}

export default NavBars;