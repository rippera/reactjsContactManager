import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/about/About';
const App = () => {
  return (
    <Provider>
      <div className='App'>
        <Router>
          <Header name='Contact Manager' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/contact/AddContact' component={AddContact} />
              <Route exact path='/contact/edit/:id' component={EditContact} />
              <Route exact path='/about/About' component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
