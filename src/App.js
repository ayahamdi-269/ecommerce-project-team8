import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from './pages/ProductPage.js';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* هذا هو المسار لصفحة الرئيسية */}
        <Route path="/" component={HomePage} exact />
        {/* هذا هو المسار لصفحة المنتج */}
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;