import {
  HashRouter,
  //Redirect,
  //Route,
  //Switch,
} from "react-router-dom/cjs/react-router-dom";
import NavigationBar from "../common/NavigationBar";
import NoResults from "../features/NoResults";
// import MainPage from "../features/MainPage";
// import PersonList from "../features/PersonList";
// import { toMainPage, toPersonList } from "./routes";
// import MoviesDetails from "../features/MoviesDetails"

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      {/*<Switch>
        <Route path="/movies/:title">
          <MoviesDetails />
        </Route>
        <Route path={toMainPage()}>
          <MainPage />
        </Route>
        <Route path={toPersonList()}>
          <PersonList />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
  </Switch>*/}
    <NoResults />
    </HashRouter>
  );
}

export default App;