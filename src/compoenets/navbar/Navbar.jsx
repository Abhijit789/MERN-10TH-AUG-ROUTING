import {Link, NavLink, Outlet} from "react-router-dom"
import "./navbar.css"
import { headingText } from "../common ui components/textConstatnt"
function Navbar() {
  return (
    <>
    <div className="fluid-container">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand bg-warning d-flex justify-content-between">
                    <Link to={'/'} className="text-decoration-none">
                    <p className="text-white fw-bold ms-3 my-2"><i className="fa fa-mobile me-2"></i><span className="text-primary">{headingText.contact}</span> <span className="text-white">{headingText.manager}</span></p>
                    </Link>
                    <div className="row me-2">
                    <div className="col">
                    <NavLink to={'/'} className={({isActive})=>`${isActive?"active":"inactive"} mx-2 text-decoration-none px-3 py-2  rounded-2`}>Contact List</NavLink>
                    <NavLink to={'/addcontact'} className={({isActive})=>`${isActive?"active":"inactive"} mx-2 text-decoration-none px-3 py-2  rounded-2`}>Add Contact</NavLink>
                    <NavLink to={'/editcontact/1'} className={({isActive})=>`${isActive?"active":"inactive"} mx-2 text-decoration-none px-3 py-2 rounded-2`}>Edit Contact</NavLink>
                    </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
        <Outlet/>
    </>
  )
}

export default Navbar