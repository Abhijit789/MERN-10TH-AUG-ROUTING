import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import API from "../../axios configuration/axiosConfig"


function ContactList() {
    let [contacts, setContacts] = useState([])
    let [loading, setLoading] = useState(true)

    async function getContacts() {
        try {
            console.log("function call");
            
            setLoading(true)
            let response = await API.get("/contacts");
            console.log(response,"res");
            
            if (!response.status===200) {
                throw new Error("data is not found!")
            }
            setContacts(response.data)
            console.log(response);
            
            setLoading(false)
        } catch (err) {
            console.log("Error Message", err.message);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getContacts()
    }, [])
    return (
        <>
        <pre>{JSON.stringify(contacts)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col my-2">
                        <p className="text-primary fw-bold">Contact List <Link className="btn btn-primary p-1" to={"/addcontact"}><i className="fa fa-plus-circle"></i></Link></p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nisi ea, blanditiis excepturi nemo error pariatur eius fuga nesciunt corrupti ipsa odio minima quaerat iusto harum incidunt quae voluptas praesentium?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="search" name="" className="form-control" placeholder="Search" id="" />
                    </div>
                </div>
                <div className="row my-3 d-flex justify-content-between">
                    {
                        loading ? "loading.." : contacts?.map(contact => {
                            return (
                                <div className="col-md-6 my-2" key={contact.id}>
                                    <div className="card">
                                        <div className="card-body d-flex justify-content-between align-items-center">
                                            <div className="col-md-3">
                                                <img className="img-fluid rounded-2" src={contact.photo} alt="" />
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item"><span className="fw-bold">Name</span>: {contact.name}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Email</span>: {contact.email}</li>
                                                    <li className="list-group-item"><span className="fw-bold">Designation</span>: {contact.designation}</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column justify-content-between">
                                                <Link to={`/editcontact/${contact.id}`} className="btn btn-primary"><i className="fa fa-pen"></i></Link>
                                                <Link to={`/viewcontact/${contact.id}`} className="btn btn-warning my-1"><i className="fa fa-eye"></i></Link>
                                                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default ContactList