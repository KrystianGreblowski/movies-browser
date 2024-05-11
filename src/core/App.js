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
  toMovieDetails,
  toMoviesSearch,
  toPeopleSearch,
  toPersonList,
  toPersonDetails,
} from "./routes";
import MoviePage from "../features/MoviePage";
import ScrollToTop from "../common/ScrollToTop";
import SearchResults from "../features/SearchResults";
import PersonDetails from "../features/PersonDetails";

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

        <Route path={toMovieDetails()}>
          <MoviePage />
        </Route>

        <Route path={toMainPage()}>
          <MainPage />
        </Route>

        <Route path={toPersonDetails()}>
          <PersonDetails />
        </Route>

        <Route path={toPersonList()}>
          <PersonList />
        </Route>

        <Route path="/">
          <Redirect to={toMainPage()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
