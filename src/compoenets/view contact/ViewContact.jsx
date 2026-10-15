import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import API from "../../axios configuration/axiosConfig";
function ViewContact() {
    let[contact,setContact]=useState({
        name:"",
        email:"",
        mobile:"",
        company:"",
        group:"",
        designation:"",
        photo:""
    })
    let[loading,setLoading]=useState(true)
    let { id } = useParams()
    console.log(id);

     async function getContact() {
        try {
            console.log("function call");
            setLoading(true)
            let response = await API.get(`/contacts/${id}`);
            console.log(response,"response");
            
            if (!response.status===200) {
                throw new Error("data is not found!")
            }
            setContact(response.data)
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
        getContact()
    }, [])
//   console.log(contact,"data");
  
    return (
        <>
        {/* <h2>Profile {id}</h2> */}
            <div className="container my-2">
                {
                    loading?"Loading....":<>
                    <div className="row my-2">
                    <div className="col-6">
                        <img style={{height:"200px",width:"200px"}} src={contact.photo} className="img-fluid rounded-4" alt="img not found" />
                 </div>
                </div>
                <div className="row my-2">
                    <div className="col-6">
                    <ul className="list-group rounded-3">
                        <li className="list-group-item"><span className="fw-bold">Contact Name :</span>{contact.name}</li>
                        <li className="list-group-item"><span className="fw-bold">Email :</span>{contact.email}</li>
                        <li className="list-group-item"><span className="fw-bold">Mobile :</span>{contact.mobile}</li>
                        <li className="list-group-item"><span className="fw-bold">Company :</span>{contact.company}</li>
                        <li className="list-group-item"><span className="fw-bold">Designation :</span>{contact.designation}</li>
                        <li className="list-group-item"><span className="fw-bold">Group :</span>{contact.group}</li>
                    </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Link className="btn btn-warning" to={"/"}>Back</Link>
                    </div>
                </div>
                    </>
                }
            </div>
        </>
    )
}

export default ViewContact