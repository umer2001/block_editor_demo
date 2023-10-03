import { useRoutes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import NewBlog from "./pages/NewBlog";
import EditBlog from "./pages/EditBlog";
import Blog from "./pages/Blog";
import CustomBlock from "./blocks/SelectBlock";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <BlogList />,
        },
        {
            path: "/new",
            element: <NewBlog />,
        },
        {
            path: "/edit/:name",
            element: <EditBlog />,
        },
        {
            path: "/:name",
            element: <Blog />,
        },
        {
            path: "custom-block",
            element: <CustomBlock />,
        }
    ]);
}  