import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import NavigationBar from "../common/NavigationBar";
import MainPage from "../features/MainPage";
import PersonList from "../features/PersonList";
import {
  toMainPage,
  toMoviesSearch,
  toPeopleSearch,
  toPersonList,
} from "./routes";
import MoviePage from "../features/MoviePage";
import ScrollToTop from "../common/ScrollToTop";
import SearchResults from "../features/SearchResults";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <NavigationBar />
      <Switch>
        <Route path={toMoviesSearch()}>
          <SearchResults />
        </Route>

        <Route path={toPeopleSearch()}>
          <SearchResults />
        </Route>

        <Route path="/movies/:movieId">
          <MoviePage />
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
      </Switch>
    </HashRouter>
  );
}

export default App;
