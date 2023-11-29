import { path } from "./path";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";



export const route = {
    home: {
        path : path.home,
        element: <Home />
    },
    notFound: {
        path : path.notFound,
        element: <NotFound />
    }
}