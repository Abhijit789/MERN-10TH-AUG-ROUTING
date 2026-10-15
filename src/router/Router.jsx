import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../compoenets/navbar/Navbar'
import ContactList from '../compoenets/contact list/ContactList'
import AddContact from '../compoenets/add contacts/AddContact'
import EditContact from '../compoenets/edit contact/EditContact'
import ViewContact from '../compoenets/view contact/ViewContact'
function Router() {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}>
           <Route index={true}  element={<ContactList/>}/>
           <Route path='/addcontact' element={<AddContact/>}/>
           <Route path='/editcontact/:id' element={<EditContact/>}/>
           <Route path='/viewcontact/:id' element={<ViewContact/>}/>
        </Route>
    </Routes>
  )
}

export default Router