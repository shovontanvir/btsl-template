import Blog from "../pages/BlogPage/Blog"
import Home from "../pages/HomePage/Home"

export const menuItems = [
    {
        id: 1,
        name: "Home",
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        name: "Blog",
        path: "/blog",
        element: <Blog />
    },
]