import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Profile from "./pages/Profile";
import AddVariete from "./pages/FormVariete";
import adminVariete from "./pages/admin/adminVariete";
import adminPlants from "./pages/admin/adminPlants";
import adminPlantsAdd from "./pages/admin/adminPlantsAdd";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/variete/ajouter/:plantId" component={AddVariete} />
        <ProtectedAdminRoute exact path="/admin/adminVariete" component={adminVariete} />
        {/* <Route exact path="/admin/adminPlants" component={adminPlants} /> */}
        <ProtectedAdminRoute exact path="/admin/adminPlants" component={adminPlants} />
        <ProtectedAdminRoute exact path="/admin/adminPlants/add" component={adminPlantsAdd} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
