import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormEl, LabelEl, InputContact, InputSubmit } from './Form.styled';
import { resetForm, setName, setNumber } from '../redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/slice';

const ContactForm = ({ onSubmit }) => {

  const dispatch = useDispatch();
  const name = useSelector(state => state.contactForm.name);
  const number = useSelector(state => state.contactForm.number);



  const handleInputСhange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      dispatch(setName(value));
    } else if (name === 'number') {
      dispatch(setNumber(value));
    }
  };

  useEffect(() => {
    if (name && number) {
      onSubmit({ name, number });
      dispatch(resetForm());
    }
  }, [onSubmit, name, number, dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact({ name, number }));
  };


  return (
    <FormEl onSubmit={handleSubmit}>
      <LabelEl>
        Name
        <InputContact
          value={name}
          onChange={handleInputСhange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelEl>
      <LabelEl>
        Number
        <InputContact
          value={number}
          onChange={handleInputСhange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelEl>
      <InputSubmit type="submit"> Add contact</InputSubmit>
    </FormEl>
  );
    
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
