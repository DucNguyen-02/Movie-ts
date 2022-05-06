import About from '../pages/About/About'
import Detail from '../pages/Detail/Detail'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import Search from '../pages/Search/Search'
import TVshows from '../pages/TVShows/TVshows'
import Watch from '../pages/Watch/Watch'

const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/movies',
        component: Movies,
    },
    {
        path: '/TVShows',
        component: TVshows,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/detail/:type/:id',
        component: Detail,
    },
    {
        path: '/watch/:type/:id',
        component: Watch,
    },
    {
        path: '/search',
        component: Search,
    },
]

export { publicRoute }
