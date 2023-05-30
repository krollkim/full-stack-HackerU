import React from 'react'
// import SetPost from './hooks/SetPost'
import { AppBar, Toolbar  } from '@mui/material'
import NavItem from '../routes/NavItem'
import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'
import SANDBOX_ROUTES from '../routes/sandboxRoutesModel'

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
      <NavItem label="loops" to={SANDBOX_ROUTES.LOOPS} color="black"/>
      {/* <NavItem label="props" to={SANDBOX_ROUTES.PROPS}color="black"/> */}
      {/* <NavItem label="fetch" to={SANDBOX_ROUTES.FETCH} color="black"/> */}
      {/* <NavItem label="customHook" to={SANDBOX_ROUTES.CUSTOM_HOOK} color="black"/> */}
      <NavItem label="usecounter" to={SANDBOX_ROUTES.USE_COUNTER} color="black"/>
      <NavItem label="usename" to={SANDBOX_ROUTES.USE_NAME} color="black"/>
      {/* <NavItem label="propTypes" to={SANDBOX_ROUTES.PROPTYPES} color="black"/> */}
      <NavItem label="usestate" to={SANDBOX_ROUTES.USE_STATE} color="black"/>
      <NavItem label="events" to={SANDBOX_ROUTES.EVENTS} color="black"/>
      {/* <NavItem label="usememo" to={SANDBOX_ROUTES.USE_MEMO} color="black"/> */}
      {/* <NavItem label="axios" to={SANDBOX_ROUTES.AXIOS} color="black"/> */}
      <NavItem label="hooks" to={SANDBOX_ROUTES.HOOKS} color="black"/>
      <NavItem label="lifecyclehooks" to={SANDBOX_ROUTES.LIFE_CYCLE_HOOKS} color="black"/>
      <NavItem label="usecallbackcomp" to={SANDBOX_ROUTES.USE_CALLBACK_COMP} color="black"/>
      <NavItem label="use-context" to={SANDBOX_ROUTES.USE_CONTEXT} color="black"/>
      
    </Toolbar>
  </AppBar>

  <Container maxWidth="lg">
    <Outlet />
  </Container>

  </>
  
  )
}

export default SandBox