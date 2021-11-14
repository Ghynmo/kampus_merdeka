import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const baseData = {
    fullname: '',
    email: '',
    phone: '',
    nationality: '',
    message: ''
}

const baseError = {
    fullname: '',
    email: '',
    phone: ''
}

export default function FormField() {
    const [Data, setData] = useState(baseData)
    const [Err, setErr] = useState(baseError)
    const navigate = useNavigate()

    const regexNama = /^[A-Za-z ]*$/
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const HandleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        if (name === "fullname") {
            if (!regexNama.test(value)) {
                setErr({...Err, [name]: 'Nama Lengkap Harus Berupa Huruf'})
            } else {
                setErr({...Err, [name]: ''})
            }
        }
        if (name === "email") {
            if (!regexEmail.test(value)) {
                setErr({...Err, [name]: 'Email Tidak Sesuai'})
            } else {
                setErr({...Err, [name]: ''})
            }
        }
        if (name === "phone") {
            if (value.length < 9 || value.length > 14) {
                setErr({...Err, [name]: 'No Handphone Tidak Sesuai'})
            } else {
                setErr({...Err, [name]: ''})
            }
        }
        setData({...Data, [name]: value});
    }
    
    const HandleSubmit = (e) => {
        if (Err.fullname !== '' || Err.email !== '' || Err.phone !== '') {
            console.log("Fail")
            alert(`Data Pendaftar Tidak Sesuai`)
          } else {
            console.log("Success")

            localStorage.setItem("fullname", Data.fullname)
            localStorage.setItem("email", Data.email)
            localStorage.setItem("phone", Data.phone)
            localStorage.setItem("nationality", Data.nationality)
            localStorage.setItem("message", Data.message)

            alert(`Data Pendaftar "${Data.fullname}" Berhasil Diterima`)
            navigate('/contact-review')
          }
          e.preventDefault();
    }

    return (
        <div className="forms">
            <form className="needs-validation" id="form-field" onSubmit={HandleSubmit} noValidate>
                <h1>Contact Us</h1>
                <div className="my-2">
                    <label htmlFor="fullname_input">Full Name<span>*</span></label>
                    <input id="fullname_input" className="form-control" type="text" name="fullname" placeholder="Your Full Name Here..." value={Data.fullname} onChange={HandleChange} required/>
                    <div className="invalid-feedback">Full name cannot be empty</div>
                </div>
                <div className="my-2">
                    <label htmlFor="email_input">Email Address<span>*</span></label>
                    <input id="email_input" className="form-control" type="email" name="email" placeholder="example@domain.com" value={Data.email} onChange={HandleChange} required/>
                    <div className="invalid-feedback">Email address cannot be empty</div>
                </div>
                <div className="my-2">
                    <label htmlFor="phone_input">Phone Number<span>*</span></label>
                    <input id="phone_input" className="form-control" type="tel" name="phone" value={Data.phone} onChange={HandleChange} required/>
                    <div className="invalid-feedback">Phone number cannot be empty</div>
                </div>
                <div className="my-2">
                    <label htmlFor="nationality_input">Nationality</label>
                    <select id="nationality_input" name="nationality" className="form-select" onChange={HandleChange}>
                        <option value="" defaultValue hidden>Selected</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Japan">Japan</option>
                        <option value="USA">USA</option>
                    </select>
                    <label htmlFor="message">Message</label>
                </div>
                <div className="my-2">
                    <textarea name="message" id="message" className="form-control" rows="5" placeholder="Your Message" value={Data.message} onChange={HandleChange}></textarea>
                    <button className="my-2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
