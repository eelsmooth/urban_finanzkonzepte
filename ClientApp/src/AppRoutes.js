import { Formular } from "./components/Formular";
import { Home } from "./components/Home";
import { Submitted } from "./components/Submitted";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/formular',
        element: <Formular />
    },
    {
        path: '/submitted',
        element: <Submitted />
    }
];

export default AppRoutes;
