import './Header.scss'
import React,{Component} from 'react'

export default class Header extends Component{
  render(){
    return(
      <div className="header kSAvah">
        <div className="header_content bggzhW">
          <img src="/images/toinylogo.png" alt="Logo" className="menu__logo-img"></img>
        </div>
      </div>
    )
  }
}
