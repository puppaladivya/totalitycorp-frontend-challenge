import {Route, Switch, redirect} from 'react-router-dom'

import LoginForm from './Components/LoginForm/index.js'
import Home from './Components/Home/index.js'
import Products from './Components/Products/index.js'
import ProductItemDetails from './Components/ProductItemDetails/index.js'
import Cart from './Components/Cart/index.js'
import NotFound from './Components/NotFound/index.js'
import ProtectedRoute from './Components/ProtectedRoute/index.js'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/products/:id" component={ProductItemDetails} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route path="/not-found" component={NotFound} />
    <redirect to="not-found" />
  </Switch>
)

export default App
