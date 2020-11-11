import React from 'react';
import { TextInput, FilePicker, Button, FormField } from 'evergreen-ui';

const ContactPage = (props) => {
    return(
        <div className="contactFormContainer">
            <h1>Contact Form</h1>
            <FormField className="contactForm" action="mailto:lagerhausen.3@gmail.com">
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
                Questions/Comments:
                <TextInput
                    name="comment"
                    placeholder="What can I help you with?"
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
            </FormField>
        </div>
    )
}

export default ContactPage;