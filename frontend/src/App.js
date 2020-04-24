import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Home from "../src/components/common/Home"
import Navbar from './components/common/Navbar'
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import SecureRoute from "../src/components/common/SecureRoute"
import FailedPage from "../src/components/common/FailedPage"


import UserEdit from "../src/components/users/UserEdit"
import UserProfile from "../src/components/users/UserProfile"
import UserResponse from "../src/components/users/UserReponse"



import LoveLetterIndex from "../src/components/loveletters/LoveLetterIndex"
import LoveLetterShow from "../src/components/loveletters/LoveLetterShow"
import LoveLetterNew from "../src/components/loveletters/LoveLetterNew"
import LoveLetterEdit from "../src/components/loveletters/LoveLetterEdit"




function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/profile" component={UserProfile} />
        <SecureRoute path="/loveletters/new" component={LoveLetterNew} />
        <SecureRoute path="/loveletters/:id" component={LoveLetterShow} />
        <SecureRoute path="/loveletters/:id" component={LoveLetterEdit} />
        <Route path="/loveletters" component={LoveLetterIndex} />
        <SecureRoute path="/penpals/:id/edit" component={UserEdit} />
        <SecureRoute path="/penpals/:id/response" component={UserResponse} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={FailedPage} />
      </Switch>
    </BrowserRouter>
  )

}

export default App
