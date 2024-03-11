import NavigationBar from "./common/NavigationBar/index";
import MainPage from "./features/MainPage";
import PersonList from "./features/PersonList";

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
