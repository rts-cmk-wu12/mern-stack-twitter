import { NavLink, useRoutes } from "react-router";
import "../styles/components/navbar.scss"
import { FaHome } from "react-icons/fa";
import { CiHashtag} from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";





//navbar virker næsten helt af sig selv
//husk at downloade de 3 packs der mangler
//react-router, react-router-dom  og vite-plugin-pages 
// og put et browserRouter component rundt om alle indsatte componenter i main


export default function Navbar(){
    return(
        

        <header>
        <nav className="navbar">
            <ul className="navbar__list">
                
                <li className="navbar__listItem"><NavLink className="navbar__link" to="/" end><FaHome />Hjem</NavLink></li>
                <li className="navbar__listItem">< NavLink className="navbar__link" to="/Next" end><CiHashtag />Opret et opslag</NavLink></li>
                <li className="navbar__listItem">< NavLink className="navbar__link" to="/settings" end> <IoIosSettings />  Settings</NavLink></li>
            </ul>
        </nav>
        
        
        </header>        
    
    )
}