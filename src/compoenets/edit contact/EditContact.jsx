import { useNavigate, useParams } from "react-router-dom"
import API from "../../axios configuration/axiosConfig";
import { useEffect, useState } from "react";
import ContactList from "../contact list/ContactList";

function EditContact() {
   let{id}=useParams();
   let navigate=useNavigate()
   let[contact,setContact]=useState({
        name:"",
        email:"",
        mobile:"",
        company:"",
        group:"",
        designation:"",
        photo:""
    })
   let [loading,setLoading]=useState(false)

   async function getContact(){
      try{
        setLoading(true)
        let res=await API.get(`/contacts/${id}`);
        if(res.status===200){
             setContact(res.data)
             setLoading(false)
             console.log(res.data);
             
        }
      }catch(err){
        console.error("error",err.message)
        setLoading(false)
      }finally{
        setLoading(false)
      }

   }

   function handleChange(e){
        let{value,name}=e.target;
        console.log("change", value);
        
        setContact((prevState)=>({
              ...prevState,
              [name]:value
        }))
   }
   async function updateContact(){
        try{
            setLoading(true)
            let res=await API.put(`contacts/${id}`,contact);
            if(res.status===201){
                setContact(res.data)
                setLoading(false)
                
            }
            
        }catch(err){
            console.log(err.message);
            setLoading(false)
            
        }finally{
            setLoading(false)
        }

   }
   useEffect(()=>{
    getContact()
   },[])

   console.log("onchange update contact",contact);
   

   let {name,email,mobile,photo,company,designation,group}=contact
  return (
    <>
    <h3>{id}</h3>
     <div className="container">
        <div className="row">
                <div className="col my-2">
                        <p className="text-success fw-bold">Edit Contact </p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nisi ea, blanditiis excepturi nemo error pariatur eius fuga nesciunt corrupti ipsa odio minima quaerat iusto harum incidunt quae voluptas praesentium?</p>
                </div>
            
        </div>
        {
            loading?"Loading...":<div className="row">
            <div className="col-5">
                <form action="" onSubmit={updateContact}>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={name} type="text" name="name" placeholder="Name" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={email} type="email" name="email" placeholder="Email" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={mobile} type="tel" name="mobile" placeholder="Mobile" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={photo} type="text" name="photo" placeholder="Photo URL" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={company} type="text" name="company" placeholder="Company" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={designation} type="text" name="designation" placeholder="Designation" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} value={group} type="text" name="group" placeholder="Select Your Group" id="" /></div>
                    <div className="mb-2">
                        <input className="btn btn-primary" type="submit" value="Update Contact" />
                        <input className="btn btn-danger ms-2" type="reset" />
                    </div>
                </form>
            </div>
        </div>
        }
     </div>
    </>
  )
}

export default EditContact