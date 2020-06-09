import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NoMatch from './Pages/404Error/NoMatch';





function App() {
  return (
  
    <Router>
      
      <Switch>
       
          <Route exact path="/" component={AppRouter} />  
          <Route path="*" component={NoMatch} /> 
          
          {/* {console.log(store.getState())} */}
       
      </Switch>
     
      
    </Router>
    
  );
}

export default App;
