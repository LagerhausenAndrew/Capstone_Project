import React from 'react';
import { TextInput, FilePicker, Button } from 'evergreen-ui';
import emailjs from 'emailjs-com'

//  This is the contact page form

const ContactPage = (props) => {

    //  This is the send email function. So after someone hits the submit button on the contact page it will send an email with their info to my email.

    function sendEmail(e) {
        e.preventDefault();
    
    emailjs.sendForm('service_j3hl7w2', 'template_bxvmq23', e.target, 'user_cH5pfppH8MpFh0wT9QdNk')
        .then((result) => {
              console.log(result.text);
        }, (error) => {
              console.log(error.text);
        });
        e.target.reset()
      }

      // This is the form

    return(
        <div className="contactFormContainer">
            <h1>Contact Form</h1>
            <form className="contactForm" onSubmit={sendEmail}>
                Full Name:
                <TextInput
                    name="name"
                    placeholder="Full Name"
                />
                Email:
                <TextInput
                    name="email"
                    placeholder="Email"
                />
                Phone Number:
                <TextInput
                    name="number"
                    placeholder="Phone Number"
                />
                Questions/Comments:
                <TextInput
                    name="comment"
                    placeholder="What can I help you with?"
                />
                Upload File:
                <FilePicker
                    name="file"
                    multiple
                    width={250}
                    marginBottom={32}
                    onChange={files => console.log(files)}
                    placeholder="Select the file here!"
                />
                <Button className='button' appearance="primary">Submit</Button>
            </form>
        </div>
    )
}

export default ContactPage;