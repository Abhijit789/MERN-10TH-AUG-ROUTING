import React from 'react'
import { Link } from 'react-router-dom'

function Card({contact,handleDelete}) {
    return (
        <>
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
                            <button className="btn btn-danger" onClick={()=>{handleDelete(contact.id)}}><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card