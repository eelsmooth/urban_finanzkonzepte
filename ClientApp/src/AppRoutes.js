import { Formular } from "./components/Formular";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/formular',
    element: <Formular />
  }
];

export default AppRoutes;
