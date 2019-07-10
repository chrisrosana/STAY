import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './ProductContext';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Details from './Details';
import PostingItem from './PostingItem';
import InvalidPage from './InvalidPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Filter from './Filter'
import User from './User'
import message from './message'
import About from './About'
import Dashboard from './Dashboard'
import userPostings from './userPostings';
import userMessages from './userMessages';
import admin from './admin'
import AdminProductDetail from './AdminProductDetail'

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ProductProvider>
    <Router>
       {/* <App /> */}
               <Switch>
                    {/* <Route history={hashHistory} /> */}
                    {/* <Route path="/" exact="" component={ListingItems} /> */}

                    <Route path="/" exact component={App} />
                    <Route path="/about" exact component={About} />
                    <Route path="/Dashboard" exact component={Dashboard} />
                    <Route path="/details" component={Details} />
                    <Route path="/posting" component={PostingItem} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/userMessages" component={userMessages} />
                    <Route path="/userPostings" component={userPostings} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/user" component={User} />
                    <Route path='/filter' component={Filter} />
                    <Route path='/message' component={message} />
                    <Route path='/admindashboard' component={admin} />
                    <Route path="/AdminProductDetail" component={AdminProductDetail} />

                    <Route component={InvalidPage} />
                  </Switch>
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
