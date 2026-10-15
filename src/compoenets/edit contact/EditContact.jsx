
function EditContact() {
  return (
    <>
     <div className="container">
        <div className="row">
                <div className="col my-2">
                        <p className="text-success fw-bold">Edit Contact </p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nisi ea, blanditiis excepturi nemo error pariatur eius fuga nesciunt corrupti ipsa odio minima quaerat iusto harum incidunt quae voluptas praesentium?</p>
                </div>
            
        </div>
        <div className="row">
            <div className="col-5">
                <form action="">
                    <div className="mb-2"><input className="form-control" type="text" name="" placeholder="Name" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="email" name="" placeholder="Email" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="tel" name="" placeholder="Mobile" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="text" name="" placeholder="Photo URL" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="text" name="" placeholder="Company" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="text" name="" placeholder="Designation" id="" /></div>
                    <div className="mb-2"><input className="form-control" type="text" name="" placeholder="Select Your Group" id="" /></div>
                    <div className="mb-2">
                        <input className="btn btn-primary" type="submit" value="Update Contact" />
                        <input className="btn btn-danger ms-2" type="reset" />
                    </div>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default EditContact