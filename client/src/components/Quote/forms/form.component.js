import React from 'react';
import { Field } from 'redux-form';
import Text from '../text';
import Select from '../select';
import Datepicker from '../datepicker';
import Multiselect from '../multiselect';
import 'react-widgets/dist/css/react-widgets.css'
import { reduxForm } from 'redux-form'
import '../formstyle.css';
import header from '../header.png';
import { required } from '../form.validators'

const FormComponent = ({ handleSubmit, services }) => {


    return (
           <div style={{ background: `url(https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/prograss_res.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="flex flex-column justify-center items-center mb-5 mt-5" alt="">
            <div className="image">
                <img src={header} width="1000" height="600" alt=""/>
            </div>
            <form
                className="w-80"
                onSubmit={handleSubmit}
            >
                <h1>Request a Free Quote</h1>
                <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col">
                            <Field
                                name="name"
                                label="Name"
                                component={Text}
                                validate={required}
                            />
                        </div>
                        <div className="col">
                            <Field
                                name="phone"
                                label="Phone Number"
                                component={Text}
                                validate={required}
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Field
                                name="address"
                                label="Address"
                                component={Text}
                                validate={required}
                            />
                        </div>
                        <div className="col">
                            <Field
                                name="suburb"
                                label="Suburb"
                                component={Text}
                                validate={required}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Field
                                name="email"
                                label="Email"
                                component={Text}
                                validate={required}
                            />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <title>Inspection Time</title>
                            <Field
                                label="inspection"
                                name="timeOfInspection"
                                component={Select}
                                options={{
                                    seven: "7:00am",
                                    seventhirty: "7:30am",
                                    eight: "8:00am",
                                    eightthirty: "8:30am",
                                    nine: "9:00am",
                                    ninethirty: "9:30am",
                                    ten: "10:00am",
                                    tenthirty: "10:30am",
                                    eleven: "11:00am",
                                    eleventhirty: "11:30am",
                                    twelve: "12:00pm",
                                    twelvethirty: "12:30pm",
                                    one: "1:00pm",
                                    onethirty: "1:30pm",
                                    two: "2:00pm",
                                    twothirty: "2:30pm",
                                    three: "3:00pm",
                                    threethirty: "3:30pm",
                                    four: "4:00pm",
                                    fourthirty: "4:30pm",
                                    five: "5:00pm"
                                }}
                            />
                        </div>
                        <div className="col">
                            <title>Inspection Date</title>
                            <Field
                                name="dateOfInspection"
                                label="Date of services"
                                showTime={false}
                                component={Datepicker}
                            />
                        </div>
                        <div className="col">
                            <title>Property Type</title>
                            <Field
                                name="propertyType"
                                label="Property Type"
                                component={Select}
                                options={{
                                    residential: "Residential",
                                    commerical: "Commercial",
                                    acerage: "Acerage"
                                }}
                            />

                        </div>
                    </div>
                </div>

                <div className="container">
                            <title>Click to select Service/s Required:</title>
                            <div className="col">
                                <Field
                                    name="service"
                                    label="Services Required"
                                    component={Multiselect}
                                    data={services}
                                />
                            </div>
                </div>
                <div className="container">
                    <Field
                        name="message"
                        label="Message"
                        component={Text}
                    />
                </div>
                
                <button type="submit" className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba">
                    Submit
				</button>
            </form>
        </div >
    );
};

const formConfiguration = {
    form: 'quote-form'
}

export default reduxForm(formConfiguration)(FormComponent)