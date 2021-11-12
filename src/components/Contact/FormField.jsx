import React from 'react'

const basedata = {
    fullname: '',
    email: '',
    phone: '',
    nationality: '',
    message: ''
}

export default function FormField() {
    const [data, setdata] = useState(basedata)

    return (
        <div class="forms">
            <form class="needs-validation" id="form-field" action="review_message.html" novalidate>
                <h1>Contact Us</h1>
                <div class="my-2">
                    <label for="fullname_input">Full Name<span>*</span></label>
                    <input id="fullname_input" class="form-control" type="text" name="Full-name" placeholder="Your Full Name Here..." required/>
                    <div class="invalid-feedback">Full name cannot be empty</div>
                </div>
                <div class="my-2">
                    <label for="email_input">Email Address<span>*</span></label>
                    <input id="email_input" class="form-control" type="email" name="Email-address" placeholder="example@domain.com" required/>
                    <div class="invalid-feedback">Email address cannot be empty</div>
                </div>
                <div class="my-2">
                    <label for="phone_input">Phone Number<span>*</span></label>
                    <input id="phone_input" class="form-control" type="tel" name="Phone-number" required/>
                    <div class="invalid-feedback">Phone number cannot be empty</div>
                </div>
                <div class="my-2">
                    <label for="nationality_input">Nationality</label>
                    <select id="nationality_input" name="Nationality" class="form-select">
                        <option value="" selected hidden>Selected</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Japan">Japan</option>
                        <option value="USA">USA</option>
                    </select>
                    <label for="message">Message</label>
                </div>
                <div class="my-2">
                    <textarea name="Message" id="message" class="form-control" rows="5" placeholder="Your Message"></textarea>
                    <button class="my-2" type="submit" onclick="saveValue()">Submit</button>
                </div>
            </form>
        </div>
    )
}
