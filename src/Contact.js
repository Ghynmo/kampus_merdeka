import logo from './logo.svg';
import './App.css';

function Contact() {
  return (
    <div classNameNameName="Contact">
      <div className="contact-wrap">
            <div className="img-banner">
                <div className="layer">
                    <img src="assets/images/logo-ALTA-v2.png" alt="" />
                </div>
            </div>
            <div className="forms">
                <form className="needs-validation" id="form-field" action="review_message.html" novalidate>
                    <h1>Contact Us</h1>
                    <div className="my-2">
                        <label for="fullname_input">Full Name<span>*</span></label>
                        <input id="fullname_input" className="form-control" type="text" name="Full-name" placeholder="Your Full Name Here..." required />
                        <div className="invalid-feedback">Full name cannot be empty</div>
                    </div>
                    <div className="my-2">
                        <label for="email_input">Email Address<span>*</span></label>
                        <input id="email_input" className="form-control" type="email" name="Email-address" placeholder="example@domain.com" required />
                        <div className="invalid-feedback">Email address cannot be empty</div>
                    </div>
                    <div className="my-2">
                        <label for="phone_input">Phone Number<span>*</span></label>
                        <input id="phone_input" className="form-control" type="tel" name="Phone-number" required />
                        <div className="invalid-feedback">Phone number cannot be empty</div>
                    </div>
                    <div className="my-2">
                        <label for="nationality_input">Nationality</label>
                        <select id="nationality_input" name="Nationality" className="form-select">
                            <option value="" selected hidden>Selected</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Japan">Japan</option>
                            <option value="USA">USA</option>
                        </select>
                        <label for="message">Message</label>
                    </div>
                    <div className="my-2">
                        <textarea name="Message" id="message" className="form-control" rows="5" placeholder="Your Message"></textarea>
                        <button className="my-2" type="submit" onclick="saveValue()">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contact;
