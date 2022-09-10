import Home from '../pages/Home';
import Contact from '../pages/Contact';
export const publicRoutes = [
    {
        path:"/", component: Home
    },
    {
        path:"/contact", component: Contact
    }
];

export const privateRoutes = [];