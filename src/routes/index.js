import React, { Suspense } from 'react';
// import { HashRouter as Router, Switch, Link, Route } from 'react-router-dom';

import HomeLayout from '../containers/Home.jsx';
const HomeComponent = React.lazy(() => import(/* webpackChunkName: "HomeComponent" */ '../views/home'));
const ListComponent = React.lazy(() => import(/* webpackChunkName: "ListComponent" */ '../views/list'));

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  );
};

export default [
  {
    path: '/',
    component: HomeLayout,
    routes: [
      {
        path: '/home',
        component: SuspenseComponent(HomeComponent)
      },
      {
        path: '/list',
        component: SuspenseComponent(ListComponent)
      }
    ]
  }
];

// const Home = props => {
//   return (
//     <Suspense fallback={<div>加载中...</div>}>
//       <HomeComponent {...props} />
//     </Suspense>
//   );
// };
// const List = props => {
//   return (
//     <Suspense fallback={<div>加载中...</div>}>
//       <ListComponent {...props} />
//     </Suspense>
//   );
// };

// class AppRouter extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/home">home</Link>
//             </li>
//             <li>
//               <Link to="/list">blog</Link>
//             </li>
//           </ul>
//           {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
//           {/* 如果一个<Route>没有path属性，他的组件对应内容将一直被渲染出来。 */}
//           <Switch>
//             {/* exact */}
//             <Route path="/" component={Home}>
//               {/* 当 url 为/时渲染 Dashboard */}
//               {/* <IndexRoute component={Dashboard} /> */}
//               <Route path="/home" component={Home} />
//               <Route exact path="/list" component={List} />
//               {/* <Route component={Home} /> */}
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
// export default AppRouter;
