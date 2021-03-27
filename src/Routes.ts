import Dashboard from "./pages/Dashboard/Dashboard.lazy";

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard }
]

export default routes;