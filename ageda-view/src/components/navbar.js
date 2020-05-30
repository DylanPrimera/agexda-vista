import React from 'react'
import './style/nav.css'
class navbar extends React.Component{
    render(){
        return <div>
            <nav className="navbar" id="nab" >
                <div className="hambu"><div></div></div>
                <div className="navbar-nav mr-auto ml-auto text-center">
                    <h2 ><b>EVENTO 1</b></h2>
                </div>
              
            </nav>
        </div>
          
    }
}
export default navbar;
