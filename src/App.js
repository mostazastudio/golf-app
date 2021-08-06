import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BarraNav } from "./components/navbar";
import { Login } from "./components/login";
import { Registro } from "./components/registro";
/*import { Dashboard } from ".components/dashboard";*/
import { NewTraining } from "./components/new_training";
/*import { Training } from ".components/training";*/
import './App.css';


function App() {

  return (
    <Router>
      <BarraNav/>
      <div className="container-fluid">
        <Switch>
          <Route path="/new_training" component={NewTraining} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
        </Switch>
      </div>
    </Router>
    )
}

export default App;
