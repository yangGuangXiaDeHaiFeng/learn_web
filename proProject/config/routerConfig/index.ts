export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './welcome/Welcome',
      },
      {
        path: '/timetable',
        name: 'timetable',
        icon: 'smile',
        component: './timetable',
      },
      {
        path: '/charts',
        name: 'charts',
        icon: 'smile',
        component: './charts',
      },
      {
        path: '/learnUseContext',
        name: 'learnUseContext',
        icon: 'smile',
        component: './learnUseContext',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
