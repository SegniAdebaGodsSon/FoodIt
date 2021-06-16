import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";

import AboutUs from "./pages/AboutUs";
import Explore from "./pages/Explore";
import AddRecipe from "./pages/AddRecipe";
import MyPosts from "./pages/MyPosts";
import Authentication from "./pages/Authentication";
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from "./components/signup/signup";


function App() {
  return (
    <>
      
      <Layout>
        <Switch>
          <Route path='/' exact={true}>
            <Explore />
          </Route>

          <Route path='/about-us'>
            <AboutUs />
          </Route>

          

          <Route path='/my-posts'>
            <MyPosts />
          </Route>

          <Route path='/new-recipe'>
            <AddRecipe />
          </Route>


          <Route path='/auth'>
            <Authentication />
          </Route>

          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </Layout>
      
    </>
  );
}

export default App;
