/**
  Application routing
**/
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render(
  <Router history={ReactRouter.browserHistory}>
    <Route path="/" component={ClassIndexBox}/>
    <Route path="/classes/:id" component={AssignmentsIndexBox}/>
  </Router>
, document.getElementById('view'));
