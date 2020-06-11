// import React from 'react';
// import { Route, Switch, Redirct } from 'react-router-dom';

/**
 * @description: 渲染所有的路由
 * @param {type}
 * @return: void
 */
// export function renderAllRoutes(routesConfig, extraProps) {
//   let routes = renderRoutes(routesConfig, extraProps);
//   let redirect = renderRedirctRoute(routesConfig);
//   return [...routes, redirect];
// }

/**
 * @description: 普通页面路由
 * @param {type}
 * @return: void
 */
// export function renderRoutes(routesConfig, extraProps) {
//   return routesConfig.map((item, index) => {
//     const {
//       path,
//       exact,
//       isProtected,
//       isDynamic,
//       component: Component,
//       routes = [],
//       loadingFallback
//     } = item;
//     // Switch 里面只能放 Route ，不能放别的，哪怕是 React.Fragment
//     return (
//       <Route key={path} path={path} exact={exact}
//         component={props => {
//           if (isProtected && !localStorage.getItem('token')) {
//             return <Redirct key={'login-redirect'} to={'/login'} ></Redirct >;
//           }
//         }}
//       ></Route >
//     )
//   });
// }
