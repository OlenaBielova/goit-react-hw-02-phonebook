import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone-lite';
import {
  NewContactForm,
  NameInput,
  NumberInput,
  AddBtn,
  Error,
} from './Form.styled';

export class ContactForm extends React.Component {

    static propTypes = {
      initialValues: PropTypes.array,
      
    value: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    number: yup
      .string()
      .phone('UA', 'Please enter a valid phone number')
      .required('A phone number is required'),
  });

  initialValues = {
    name: '',
    number: '',
    id: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const fullValues = {...values};
    fullValues.id = nanoid();
    this.props.onSubmit(fullValues);
    resetForm();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        <NewContactForm autoComplete="off">
          <label>
            {' '}
            Name{' '}
            <NameInput
              type="text"
              placeholder="Mia Fiona"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Error>
              <ErrorMessage name="name" />
            </Error>
          </label>
          <br />
          <label>
            {' '}
            Number{' '}
            <NumberInput
              type="tel"
              placeholder="+38011 111 11 11"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <Error>
              <ErrorMessage name="number" />
            </Error>
          </label>
          <br />
          <AddBtn type="submit">Add</AddBtn>
        </NewContactForm>
      </Formik>
    );
  }
}
