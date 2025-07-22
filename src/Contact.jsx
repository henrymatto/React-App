import React, { useRef } from 'react';
import img1 from "../src/assets/img/contact.jpg";

const Contact = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const validate = (event) => {
    event.preventDefault(); // Prevent default form submission
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const error_message = document.getElementById("error_message");
    let text;

    if (!/^[a-zA-Z]{3,}$/.test(first_name)) {
      text = "Please Enter a valid First Name (Minimum 3 characters, only letters)";
      error_message.innerHTML = text;
      return false;
    }

    if (!/^[a-zA-Z]{3,}$/.test(last_name)) {
      text = "Please Enter a valid Last Name (Minimum 3 characters, only letters)";
      error_message.innerHTML = text;
      return false;
    }

    if (email.trim() === '') {
      text = "Please Enter a valid email";
      error_message.innerHTML = text;
      return false;
    }

    if (isNaN(phone) || phone.length !== 11) {
      text = "Please Enter a valid 11-digit Phone Number";
      error_message.innerHTML = text;
      return false;
    }

    if (message.length <= 20) {
      text = "Please enter more than 20 Characters";
      error_message.innerHTML = text;
      return false;
    }

    if (message.length >= 100) {
      text = "Please enter less than 100 Characters";
      error_message.innerHTML = text;
      return false;
    }

    // Alert message for successful submission
    alert("Form submitted successfully! Thank you for contacting us");

    // Clear the form fields
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    messageRef.current.value = '';

    // Clear the error message
    error_message.innerHTML = '';
  };

  return (
    <>
      <section id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h1 className='heading'>Contact Us</h1>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row mb-3">
              <div className="col-lg-6 p-5"> 
                <div className="box">
                  <div className="background-image">
                    <img src={img1} width="100%" alt="Contact" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <form className="form reveal" id="myform" onSubmit={validate}>
                  <label htmlFor="first-name">First Name *</label>
                  <input type="text" id="first-name" name="first-name" placeholder="Enter your first name" ref={firstNameRef} required />
                  <label htmlFor="last-name">Last Name *</label>
                  <input type="text" id="last-name" name="last-name" placeholder="Enter your last name" ref={lastNameRef} required />
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" ref={emailRef} required />
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" ref={phoneRef} required />
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Enter your message" ref={messageRef} />
                  <div className="d-flex">
                    <input type="checkbox" id="privacy-policy" name="privacy-policy" required />
                    <label htmlFor="privacy-policy">Do you want to subscribe to our Newsletter? </label> 
                  </div>
                  <div id="error_message" style={{ color: 'red' }} />
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="col-lg-12">
                <div className="map mt-5">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63483831.129116446!2d20.429335099999996!3d13.7942066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bb81b87dcb525b1%3A0x393c32d308f695e2!2sHomeStyler!5e0!3m2!1sen!2s!4v1726904103259!5m2!1sen!2s"  
                    width="100%" 
                    height="250px" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
