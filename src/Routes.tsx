import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import ReposPage from "./pages/ReposPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/projects/:username",
        element: <ReposPage/>
    }
]);

export function Routes() {
    return <RouterProvider router={router}></RouterProvider>
}
