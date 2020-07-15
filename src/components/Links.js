import React from 'react'
import { Button } from 'reactstrap'

const Link = ({ active, children, onClick }) => (
 <Button
  onClick={onClick}
  disabled={active}
  style={{
   marginLeft: '4px',
  }}
  color="secondary"
 >
  {children}
 </Button>
)


export default Link
