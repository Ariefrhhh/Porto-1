import { useRoutes } from "react-router-dom"
import Home from "../Page/Home"
import Searchcar from "../Page/Searchcar"



const Routing = (props) => {
    return [
        {index: true, path: '/', element: <Home {...props} title="Home"/> },
        {index: true, path: '/SearchCar', element: <Searchcar {...props} title="SearchCar"/> },
        {index: true, path: '*', element: <div>Halaman Not Found</div>}
    ]
}

const PublicRoutes = (props) => {
    const routes = useRoutes(Routing(props))
    return routes
}

export default PublicRoutes