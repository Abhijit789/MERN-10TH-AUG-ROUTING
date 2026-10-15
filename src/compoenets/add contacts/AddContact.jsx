import { useState } from "react"
import API from "../../axios configuration/axiosConfig"
import { useNavigate } from "react-router-dom"

function AddContact() {
    let[contact,setContact]=useState({
        name:"",
        email:"",
        mobile:"",
        company:"",
        group:"",
        designation:"",
        photo:""
    })

    let navigate=useNavigate()

    let [isSubmitted,setIsSubmitted]=useState(false)

    let user="user";

    let human={
        [user+"Name"]:"gangadhar"
    }
    console.log(human.userName);
    

    function handleChange(e){
        console.log("value",e.target.value);
        console.log("name",e.target.name);
        
        let{name,value}=e.target
        setContact((prevState)=>({
               ...prevState,
               [name]:value
        }))
    }

    async function addContact(e){
        e.preventDefault();
        try{
            let res=await API.post("/contacts",contact);
            if(res.status===201){
               
            let data=await res.data;
            console.log(data);
            setIsSubmitted(true)
            navigate("/",{replace:true})
            }else{
                throw new Error("Data is not created!")
            }
            
        }catch(err){
            console.log("error",err.message);
            
                alert(Error("Data is not created!"))
            
        }
    }
  return (
    <>
     <div className="container">
        <div className="row">
                <div className="col my-2">
                        <p className="text-primary fw-bold">Add Contact </p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nisi ea, blanditiis excepturi nemo error pariatur eius fuga nesciunt corrupti ipsa odio minima quaerat iusto harum incidunt quae voluptas praesentium?</p>
                </div>
            
        </div>
        <div className="row">
            <div className="col-5">
                <form action="" onSubmit={addContact}>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="text" name="name" placeholder="Name" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="email" name="email" placeholder="Email" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="tel" name="mobile" placeholder="Mobile" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="text" name="photo" placeholder="Photo URL" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="text" name="company" placeholder="Company" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="text" name="designation" placeholder="Designation" id="" /></div>
                    <div className="mb-2"><input className="form-control" onChange={handleChange} type="text" name="group" placeholder="Select Your Group" id="" /></div>
                    <div className="mb-2">
                        <input disabled={isSubmitted?true:false} className="btn btn-primary" type="submit" />
                        <input className="btn btn-danger ms-2" type="reset" />
                    </div>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default AddContact