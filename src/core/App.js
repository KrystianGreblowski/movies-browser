import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import NavigationBar from "../common/NavigationBar";
import MainPage from "../features/MainPage";
import PersonList from "../features/PersonList";
// import { toMainPage, toMovieDetails, toPersonList } from "./routes";
import MoviePage from "../features/MoviePage";
import ScrollToTop from "../common/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <NavigationBar />

      <Switch>
        <Route path="/movies/:movieId">
          <MoviePage />
        </Route>

        <Route path="/movies">
          <MainPage />
        </Route>

        <Route path="/personlist">
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
