import RandomJoke from './components/jokes/RandomJoke'
import AddJoke from './components/jokes/AddJoke.vue'
import SearchJokes from './components/jokes/SearchJokes'
import MostLikedJokes from './components/jokes/MostLikedJokes'

export const routes = [
    {path: '/jokes/random', name: 'randomJoke', component: RandomJoke},
    {path: '/jokes/search', name: 'searchJoke', component: SearchJokes},
    {path: '/jokes/add', name: 'addJoke', component: AddJoke},
    {path: '/jokes/likes', name: 'mostLikedJokes', component: MostLikedJokes},
];
