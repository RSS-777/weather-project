import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux';
import { date } from '../utils/date';

export const ContactForm = () => {
    const [stateSeason, setStateSeason] = useState('');
    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        setStateSeason(date.season)
    }, [])

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Поле не може бути пустим"
        } else if (/\d/.test(values.name)) {
            errors.name = "У полі не може бути числа"
        }

        if (!values.email) {
            errors.email = "Поле не може бути пустим"
        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
            errors.email = "Невірний формат email адреси"
        }

        return errors
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={(values, formikBag) => {
                formikBag.resetForm()
            }}
            validate={validate}
        >
            {(props) => {
                return (
                    <Form className={theme === 'white' ? `form-${stateSeason}` : 'form-dark'}>
                        <div className="name-input">
                            <label htmlFor="name">Ім'я:</label>
                            <Field type='text' name='name' id='name' />
                        </div>
                        <div className="error-message">
                            <ErrorMessage name='name' component={'div'} />
                        </div>
                        <div className="email-input">
                            <label htmlFor="email">Емейл:</label>
                            <Field type='email' name='email' id='email' />
                        </div>
                        <div className="error-message">
                            <ErrorMessage name='email' component={'div'} />
                        </div>
                        <div className="textarea">
                            <label htmlFor="message">Повідомлення:</label>
                            <Field as='textarea' name='message' id='message' />
                        </div>
                        <button type='submit' className='btn-form'>Відправити</button>
                    </Form>
                )
            }}
        </Formik>
    )
};