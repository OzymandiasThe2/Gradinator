import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'',
            name: 'HomePage',
            component: ()=> import('./views/HomePage')
        },
        {
            path: '/',
            component: () => import('./main_layout/MainLayout.vue'),
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    index: 1,
                    component: () => import('./views/Dashboard')
                },
                {
                  path: '/courses',
                  name: 'Courses',
                  index: 2,
                  component: ()=> import('./views/Courses')
                },
                {
                    path: '/docs',
                    name: 'Documentation',
                    index: 3,
                    component: () => import('./views/Documentation')
                },
                {
                    path: '/create_course',
                    name: 'CreateCourse',
                    index: 4,
                    component: ()=> import('./components/course_components/CreateCourse/CreateCoursePage')
                },
            ],
        },
        {
            path:'/404',
            name: '404',
            component: ()=> import('./views/404')
        },
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/registration',
            name: 'Registration',
            component: ()=> import('./views/Registration')
        },
        {
            path:'/logs',
            name: 'Logs',
            component: ()=> import('./views/Logs')
        },
    ],
})
