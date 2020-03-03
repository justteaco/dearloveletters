import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bulma'

import Home from "../src/components/common/Home"
import Navbar from './components/common/Navbar'
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import SecureRoute from "../src/components/common/SecureRoute"
import FailedPage from "../src/components/common/FailedPage"

import UserShow from "../src/components/users/UserShow"
import UserEdit from "../src/components/users/UserEdit"
import UserProfile from "../src/components/users/UserProfile"
import UserResponse from "../src/components/users/UserResponse"


import LoveLetterIndex from "../src/components/loveletters/LoveLetterIndex"
import LoveLetterShow from "../src/components/loveletters/LoveLetterShow"
import LoveLetterNew from "../src/components/loveletters/LoveLetterNew"



function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/penpals/:id/edit" component={UserEdit} />
        <SecureRoute path="/penpals/:id" component={UserShow} />
        <Route path="/loveletters/:id/response" component={UserResponse} />
        <Route path="/loveletters/:id" component={LoveLetterShow} />
        <SecureRoute path="/loveletters/new" component={LoveLetterNew} />
        <Route path="/loveletters" component={LoveLetterIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/*" component={FailedPage} />
      </Switch>

    </BrowserRouter>
  )

}

export default App
