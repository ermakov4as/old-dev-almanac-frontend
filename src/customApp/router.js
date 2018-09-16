import asyncComponent from '../helpers/AsyncFunc';

//const id_vopr = '1';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'blank_page',
    component: asyncComponent(() => import('./containers/blankPage'))
  },
  /*{
    path: 'main_page',
    component: asyncComponent(() => import('./containers/MainPage'))
  },*/
  /*{
    path: 'sciences',
    component: asyncComponent(() => import('./containers/Dashboard'))
  },
  {
    path: `sciences/${id_vopr}/edit`,
    component: asyncComponent(() => import('./containers/SciencesEdit'))
  },*/
  /*{ path: 'sciences',
    component: asyncComponent(() => import('./containers/Dashboard')),
    routes: [
      { path: 'sciences/:id/edit',
        component: asyncComponent(() => import('./containers/SciencesEdit'))
      }
    ]
  } */ 
  {
    path: 'sciences',
    component: asyncComponent(() => import('./containers/Dashboard'))
  },
  {
    path: 'sciences/:id/edit',
    component: asyncComponent(() => import('./containers/SciencesEdit'))
  }

];
export default routes;
