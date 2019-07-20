import RandomJoke from './components/jokes/RandomJoke'
import AddJoke from './components/jokes/AddJoke.vue'
import SearchJokes from './components/jokes/SearchJokes'
import MostPopularJokes from './components/jokes/MostPopularJokes'

export const routes = [
    {path: '/jokes/random', name: 'randomJoke', component: RandomJoke},
    {path: '/jokes/search', name: 'searchJoke', component: SearchJokes},
    {path: '/jokes/add', name: 'addJoke', component: AddJoke},
    {path: '/jokes/popular', name: 'mostPopularJokes', component: MostPopularJokes},
];
