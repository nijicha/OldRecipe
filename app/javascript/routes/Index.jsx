import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Recipes from '../components/Recipes/Recipes'
import Recipe from '../components/Recipes/Recipe'
import NewRecipe from '../components/Recipes/NewRecipe'

export default (
  <Router>
    <Switch>
      {/* Recipes */}
      <Route path='/recipes' exact component={Recipes} />
      <Route path='/recipes/:id' exact component={Recipe} />
      <Route path='/new_recipe' exact component={NewRecipe} />

      {/* Root */}
      <Route component={Home} />
    </Switch>
  </Router>
)
