import React from 'react';
import { TextInput, FilePicker, Button } from 'evergreen-ui';

const ContactPage = (props) => {
    return(
        <div className="contactFormContainer">
            <h1>Contact Form</h1>
            <form className="contactForm" method="post" action="mailto:LagersLumberCreations.com">
                <TextInput
                    name="name"
                    placeholder="Full Name"
                />
                <TextInput
                    name="email"
                    placeholder="Email"
                />
                <TextInput
                    name="name"
                    placeholder="Phone Number"
                />
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