import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'
import Sub from '@/containers/Sub'

// Views
import Dashboard from '@/views/Dashboard'
import ClubList from '@/views/club/List'
import ClubSave from '@/views/club/Save'
import ClubView from '@/views/club/View'
import UserList from '@/views/user/List'
import UserSave from '@/views/user/Save'
import UserView from '@/views/user/View'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/club',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'club',
          name: 'CLUB',
          component: Sub,
          children: [
            {
              path: '',
              alias: '/club/list',
              name: 'LIST',
              meta: { title: '클럽 목록' },
              component: ClubList
            },
            {
              path: 'save/:key',
              name: 'save',
              meta: { title: '클럽 정보 저장' },
              component: ClubSave
            },
            {
              path: 'view/:key',
              name: 'view',
              meta: { title: '클럽 상세' },
              component: ClubView
            }
          ]
        },
        {
          path: '/user',
          name: 'USER',
          component: Sub,
          children: [
            {
              path: '/',
              alias: '/user/list',
              name: 'LIST',
              meta: { title: '사용자 목록' },
              component: UserList
            },
            {
              path: 'save/:key',
              name: 'SAVE',
              meta: { title: '사용자 저장' },
              component: UserSave
            },
            {
              path: 'view/:key',
              name: 'USER',
              meta: { title: '사용자 상세' },
              component: UserView
            }
          ]
        },
        {
          path: 'dashboard2',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})
