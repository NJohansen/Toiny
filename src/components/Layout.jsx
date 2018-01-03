import React from 'react'
import Header from 'components/Header'
import Button from 'components/Button'
export default ({ children }) => (
  <div>
    <Header/>
    <Button> 
      Cash out for the big G's 
      </Button>
    {children}
  </div>
)
