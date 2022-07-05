import NotFound from '../components/NotFound/NotFound'
import About from '../pages/About/About'
import Detail from '../pages/Detail/Detail'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Movies from '../pages/Movies/Movies'
import Search from '../pages/Search/Search'
import TVshows from '../pages/TVShows/TVshows'
import Watch from '../pages/Watch/Watch'

const publicRoute = [
    {
        path: '/',
        component: Home,
        layout: 'default',
    },
    {
        path: '/movies',
        component: Movies,
        layout: 'onlyHeader',
    },
    {
        path: '/TVShows',
        component: TVshows,
        layout: 'onlyHeader',
    },
    {
        path: '/about',
        component: About,
        layout: 'onlyHeader',
    },
    {
        path: '/detail/:type/:id',
        component: Detail,
        layout: 'onlyHeader',
    },
    {
        path: '/watch/:type/:id',
        component: Watch,
        layout: null,
    },
    {
        path: '/search',
        component: Search,
        layout: 'onlyHeader',
    },
    {
        path: '/login',
        component: Login,
        layout: 'onlyHeader',
    },
    {
        path: '*',
        component: NotFound,
        layout: 'null',
    },
]

export { publicRoute }
