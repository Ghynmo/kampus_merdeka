import React from 'react'
import { useSelector } from 'react-redux'

export default function ReviewField() {
    const formdata = useSelector(state => state.formdata.formdata)

    return (
        <div className="centered-box">
            <div className="information">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th className="table_head">Full Name</th>
                                <td>: <p id="fullname_value">{formdata.fullname}</p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Email Address</th>
                                <td>: <p id="email_value">{formdata.email}</p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Phone Number</th>
                                <td>: <p id="phone_value">{formdata.phone}</p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Nationality</th>
                                <td>: <p id="nationality_value">{formdata.nationality}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="hi_text">
                    <p>{formdata.message}</p>
                </div>
                <div className="thanks_text">
                    <hr/>
                    <p>Thanks for contacting us! </p><p> We will be in touch with you shortly.</p>
                    <button>Home</button>
                </div>
            </div>
        </div>
    )
}
