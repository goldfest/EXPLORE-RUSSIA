import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contacts.css';
import PhotoContact from '../assets/photo-contact2.png';

const ContactsCity = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
    return (
        <>
            <div className='contactsCity' id='contactsCity'>
                <div className='row row-contact'>
                    <div className='col-lg-4 col-sm-3'>
                        <img src={PhotoContact} className='photo-contact' />
                    </div>
                    <div className='col-lg-8 col-sm-9'>
                        <div className='col-lg-12 col-sm-12 col-title'>
                            <p>
                                <a className='title-contact-city no-decotation'>Liked?</a>
                            </p>
                            <p>
                                <a className='title-contact-city no-decotation no-adapt-contact-city'>Leave a review</a>
                            </p>
                            <p>
                                <a className='title-contact-city no-decotation adapt-contact-city'>Leave a</a>
                            </p>
                            <p>
                                <a className='title-contact-city no-decotation adapt-contact-city'>review</a>
                            </p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <div className='row row-submit'>
                                <div className='col-lg-3 col-sm-6 mb-3'>
                                    <Form.Group className="input-data">
                                        <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="My Name"
                                        required
                                        />
                                        <hr className='horizontal-line-contact'/>
                                    </Form.Group>
                                </div>
                                <div className='col-lg-1 col-sm-0 ppppp'></div>
                                <div className='col-lg-6 col-sm-6'>
                                <Form.Group className="input-data">
                                    <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="My Email"
                                    required
                                    />
                                    <hr className='horizontal-line-contact'/>
                                </Form.Group>
                                </div>
                            </div>
                            <div className='row row-quastion'>
                                <div className='col-lg-10 col-sm-12'>
                                    <Form.Group className="input-data">
                                        <Form.Control
                                        as="textarea"
                                        rows={1}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="My question"
                                        required
                                        />
                                        <hr className='horizontal-line-contact'/>
                                    </Form.Group>
                                </div>
                                <div className='col-lg-10 col-sm-12 d-flex justify-content-end align-items-center'>
                                    <Button variant="primary" type="submit" className='contact-button'>
                                    Send It
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsCity;
