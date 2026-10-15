import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import API from "../../axios configuration/axiosConfig"
import Card from "../common ui components/Card"
import Spinner from "../common ui components/Spinner"
import { headingText } from "../common ui components/textConstatnt"


function ContactList() {
    let [contacts, setContacts] = useState([])
    let [loading, setLoading] = useState(true)
    // let navigate=useNavigate()
    let [query, setQuery] = useState("")
    let [filerContacts, setFilterContacts] = useState([])

    async function getContacts() {
        try {
            console.log("function call");

            setLoading(true)
            let response = await API.get("/contacts");
            console.log(response, "res");

            if (!response.status === 200) {
                throw new Error("data is not found!")
            }
            setContacts(response.data)
            setFilterContacts(response.data)
            console.log(response);

            setLoading(false)
        } catch (err) {
            console.log("Error Message", err.message);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    async function handleDelete(id) {
        try {
            let res = await API.delete(`/contacts/${id}`);
            console.log(res, "deleetd");


            if (res.status === 200) {
                alert("data is deleted successfully!");
                // navigate("/",{replace:true})
                getContacts()
                return res.data
            }
        } catch (err) {
            console.log(err.message);

        }
    }

    function getFilterData(queryParameter) {
        setQuery(queryParameter)
        let filterData = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(query.toLowerCase())
        })

        setFilterContacts(filterData)

    }

    console.log(filerContacts, "filtercontacts");


    console.log(query);

    useEffect(() => {
        getContacts()
    }, [])
    return (
        <>
            <pre>{JSON.stringify(contacts)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col my-2">
                        <p className="text-primary fw-bold">{headingText.contactListHeading}<Link className="btn btn-primary p-1" to={"/addcontact"}><i className="fa fa-plus-circle"></i></Link></p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nisi ea, blanditiis excepturi nemo error pariatur eius fuga nesciunt corrupti ipsa odio minima quaerat iusto harum incidunt quae voluptas praesentium?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="search" onChange={(e) => { getFilterData(e.target.value) }} name="" className="form-control" placeholder="Search" id="" />
                    </div>
                </div>
                <div className="row my-3 d-flex justify-content-between">
                    {
                        loading ? <Spinner /> : (filerContacts.length > 0 ? filerContacts?.map(contact => {
                            return (
                                <Card contact={contact} handleDelete={handleDelete} key={contact.id} />
                            )
                        }) : <p className="h3 text-danger" >No such Contact {query} Available!!</p>)
                    }


                </div>
            </div>
        </>
    )
}

export default ContactList