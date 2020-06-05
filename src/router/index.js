import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';

const HomeComponent = React.lazy(() => import(/* webpackChunkName: "HomeComponent" */ '../views/home'));
const ListComponent = React.lazy(() => import(/* webpackChunkName: "ListComponent" */ '../views/list'));
const Home = (props) => {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <HomeComponent {...props} />
    </Suspense>
  )
}
const List = (props) => {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ListComponent {...props} />
    </Suspense>
  )
}



class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/list">blog</Link></li>
          </ul>
          {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
          <Switch>
            {/* exact */}
            <Route path="/home" component={Home} />
            <Route exact path="/list" component={List} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default AppRouter;
