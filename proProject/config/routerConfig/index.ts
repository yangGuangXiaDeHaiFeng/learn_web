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
        path: '/learnBrowser',
        name: 'learnBrowser',
        icon: 'smile',
        component: './learnBrowser',
      },
      {
        path: '/learnUmiSetting',
        name: 'learnUmiSetting',
        icon: 'smile',
        component: './learnUmiSetting',
      },
      {
        path: '/canvas',
        name: 'canvas',
        icon: 'smile',
        component: './canvas',
      },
      {
        path: '/arithmetic',
        name: 'arithmetic',
        icon: 'smile',
        component: './arithmetic',
      },
      {
        path: '/learnMustache',
        name: 'learnMustache',
        icon: 'smile',
        component: './learnMustache',
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
