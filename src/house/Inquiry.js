import { useState } from "react";

const Inquiry = () => {
    // intial state for contactInfo is set with an object and those values set to an empty string
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onInputChange = (event) => {
        // onInputChange gets an event object argument
        // that event object is used to update the state of contactInfo using setContactInfo function
        // that event object being handed to setContactInfo is contactInfo state as it is now and adding to it
        // the spread operator "..." is a diect copy of all the properties of the current state
        // the new key/value pair we are adding is an expression [event.target.id]: event.target.value
        // the target of the event object is the HTML element's id in the input field which is "name, email, remarks"
        // the value of the target becomes the value of the input 
        setContactInfo({ ...contactInfo, [event.target.id]: event.target.value})
    };

    const onSubmit = (event) => {
        // the preventDefault() func prevents the default submit behavior of the browser
        event.preventDefault();
        // normally there would be an API call or a way to send the information to the back-end
        console.log(contactInfo);
    };

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text" 
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    value={contactInfo.name}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="text" 
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={contactInfo.email}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                    type="text" 
                    id="remarks"
                    className="form-control"
                    placeholder="Remarks"
                    value={contactInfo.remarks}
                    onChange={onInputChange}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                // button ENABLED when there is a value for both name and email
                // this is really powerful, React is actively monitoring for changes
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
                >Submit
            </button>
        </form>

    )

};

export default Inquiry;