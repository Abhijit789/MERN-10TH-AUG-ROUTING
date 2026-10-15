import { createBrowserRouter } from "react-router-dom";
import Navbar from "../compoenets/navbar/Navbar";
import ContactList from "../compoenets/contact list/ContactList";
import AddContact from "../compoenets/add contacts/AddContact";
import EditContact from "../compoenets/edit contact/EditContact";
import ViewContact from "../compoenets/view contact/ViewContact";
import PageNotFound from "../relative and nested routing/PageNotFound";

let router=createBrowserRouter([
    {
        path:"/",
        element:<Navbar/>,
        children:[
            {
                index:true,
                element:<ContactList/>

            },{
               path:"addcontact",
               element:<AddContact/>
            }
            ,
            {
                path:"editcontact/:id",
                element:<EditContact/>
            },
            {
                path:"viewcontact/:id",
                element:<ViewContact/>
            },
        ]
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])

export default router;