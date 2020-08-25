export default  [
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
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]