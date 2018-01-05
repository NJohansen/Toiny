import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default ({ children }) => (
  <div>
    <Header/>
    <div className="main flexie">
    {children}
    </div>
    <Footer/>
  </div>
)
