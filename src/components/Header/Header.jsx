import './Header.scss'
import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Header extends Component{
  activeLink(...paths){
    if(paths.includes(window.location.pathname)){
      return "Navbar_link hBrjIA eVuugS active"
    }
    return "Navbar_link hBrjIA eVuugS"
  }

  render(){
    const menuItems = [
      ["Dashboard","/dashboard","/"],
      ["Portfolio","/portfolio"],
      ["My account","/account"]
    ];
    return(
      <div>
      <div className="header kSAvah">
        <div className="header_content bggzhW">
          <h1>Toiny</h1>
          <div className="Header__Dropdown-kRsXac imiCeQ">
            Niclas Johansen
          </div>
        </div>
      </div>
      <div className="Navbar hruEfI dzohzs">
        <div className="Navbar_content cFMUnB iDqRrV">
          {menuItems.map(([name,...paths])=> this.renderMenuItem(name,...paths))}
        </div>
      </div>
    </div>
    )
  }
  renderMenuItem(name,...paths){
    return(<div key={name} className={this.activeLink(...paths)} role="button"><Link to={paths[0]}>{name}</Link></div>)
  }
}
