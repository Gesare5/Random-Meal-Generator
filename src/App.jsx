import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Register from './pages/register';
import Login from './pages/login';
import SuggestMeal from './pages/Suggest';
import MainPage from './pages/all-foods';
import AddMeal from './pages/AddNewMeal';
// import Index from './components/testT';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main-page">
          <MainPage />
        </Route>
        <Route path="/suggest-meal">
          <SuggestMeal />
        </Route>
        <Route path="/add-meal">
          <AddMeal />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    // <Index />
  );
}

export default App;
