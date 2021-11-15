import React from 'react'
import { useSelector } from 'react-redux'

export default function ReviewField() {
    const formdata = useSelector(state => state.formdata)

    return (
        <div className="centered-box">
            <div className="information">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th className="table_head">Full Name</th>
                                <td>: <p id="fullname_value">{console.log(formdata.fullname)}</p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Email Address</th>
                                <td>: <p id="email_value"></p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Phone Number</th>
                                <td>: <p id="phone_value"></p></td>
                            </tr>
                            <tr>
                                <th className="table_head">Nationality</th>
                                <td>: <p id="nationality_value"></p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="hi_text">
                    <i> Hi <span id="hi_name"></span>, I’m Mike from Monsters, Inc. I’ve seen your previous project and it was really amazing. And as you know our company are planning to build new mobile application. I hope you can join us to develope this application. We look forward to hearing from you and hope you’ll join our project! </i>
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
