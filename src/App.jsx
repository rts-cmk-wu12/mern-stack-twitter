import { useRoutes } from "react-router"
import Navbar from "./components/Navbar"
import routes from "~react-pages"



 function App(){
    return(
        <>
       
          <Navbar></Navbar>
          {useRoutes(routes)}
        
        </>

    )

   
}

export default App