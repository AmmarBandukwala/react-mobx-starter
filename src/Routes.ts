import Contact from "./pages/Contact/Contact.lazy";
import Dashboard from "./pages/Dashboard/Dashboard.lazy";
import Login from "./pages/Login/Login.lazy";
import Signup from "./pages/Signup/Signup.lazy";

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/login', exact: true, name: 'Dashboard', component: Login },
    { path: '/signup', exact: true, name: 'Dashboard', component: Signup },
    { path: '/contact', exact: true, name: 'Dashboard', component: Contact }
]

export default routes;