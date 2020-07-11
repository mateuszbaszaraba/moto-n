import Home from './components/Home.vue'
import Cars from './components/Cars/CarGrid.vue'
import Profile from './components/Profile/ProfCarGrid.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/cars', component: Cars },
    { path: '/profile', component: Profile }
]