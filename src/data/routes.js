import Page1 from '../components/pages/page1.js';
import SubPage from '../components/pages/subpage.js';
import Homepage from '../components/pages/homepage.js';

const routes = [
    {
        path: '/page1',
        name: 'Page 1',
        component: Page1,
        index: false,
        children: [
            {
                path: '/page1/sub',
                name: 'SubPage',
                component: SubPage,
                index: false
            },
            {
                path: '/page1/sub1',
                name: 'SubPage1',
                component: SubPage,
                index: false
            }
        ]
    },
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
        excludeNav: false,
        index: true
    }
];

export default routes;