import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Layout from '../Layout/Layout'

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])