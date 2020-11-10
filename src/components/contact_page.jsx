import React from 'react';
import { TextInput, FilePicker, Button } from 'evergreen-ui';

const ContactPage = (props) => {
    return(
        <div className="contactFormContainer">
            <h1>Contact Form</h1>
            <form className="contactForm">
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
                    name="name"
                    placeholder="Phone Number"
                />
                Upload File:
                <FilePicker
                    multiple
                    width={250}
                    marginBottom={32}
                    onChange={files => console.log(files)}
                    placeholder="Select the file here!"
                />
                <Button appearance="primary">Submit</Button>
            </form>
        </div>
    )
}

export default ContactPage;