import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "search", element: <Search /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
