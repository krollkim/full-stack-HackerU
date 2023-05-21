import React from 'react'
// import SetPost from './hooks/SetPost'
import { AppBar, Toolbar  } from '@mui/material'
import NavItem from '../routes/NavItem'
import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'

// import AppBarComponent from '../components/AppBarComponent'
// import MuiBottomNavigators from './layouts/footer/MuiBottomNavigators'
// import SetArray from './hooks/useState/SetArray'
// import SetCounter from './hooks/useState/SetCounter'
// import UseState from './hooks/useState/UseState'
// import UseStateWithComplex from './hooks/useState/UseStateWithComplex'
// import PropTypesFather from './proptypes/PropTypesFather'
// import CardComponent from '../cards/components/card/Card'
// import Loops from './loops/Loops'
// import Father from './props/Father'
// import Events from './events/Events'
// import FatherEvents from './events/Father'

const SandBox = () => {
  return (
  <>
  {/* // <Father/>
  // <CardComponent/>
  // <Loops />
  // <Events />
  // <FatherEvents />
  // <PropTypesFather />
  // <UseState />
  // <UseStateWithComplex />
  // <SetCounter />
  // <SetArray />
  // <AppBarComponent />
  // <MuiBottomNavigators /> */}
  {/* <SetPost /> */}

  <AppBar position="static" color="transparent">
    <Toolbar>
      <NavItem label="props" to="props" color="black"/>
      <NavItem label="fetch" to="fetch" color="black"/>
      <NavItem label="custom hook" to="custom-hook" color="black"/>
      <NavItem label="propTypes" to="propTypes" color="black"/>
      <NavItem label="usecallback" to="use-callback" color="black"/>
      <NavItem label="loops" to="loops" color="black"/>
      <NavItem label="events" to="events" color="black"/>
      <NavItem label="usememo" to="use-memo" color="black"/>
      <NavItem label="axios" to="axios" color="black"/>
    </Toolbar>
  </AppBar>

  <Container maxWidth="lg">
    <Outlet />
  </Container>

  </>
  
  )
}

export default SandBox