import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import NavigationBar from "../common/NavigationBar";
import MainPage from "../features/MainPage";
import PersonList from "../features/PersonList";
import { toMainPage, toPersonList } from "./routes";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path={toMainPage()}>
          <MainPage />
        </Route>
        <Route path={toPersonList()}>
          <PersonList />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
