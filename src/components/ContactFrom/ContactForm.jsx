import { useState } from "react";
import PropTypes from 'prop-types';


export const ContactForm = ({saveContact}) => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  }

  const submitForm = (evt) => {
    evt.preventDefault();
    saveContact({ name, number })
    evt.target.reset()
  }

    return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="userName">Name</label>
        <input onChange={handleChange} id="userName" type="text" name="name" pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </div>
      <div>
        <label htmlFor="userNumber">Number</label>
        <input onChange={handleChange} id="userNumber" type="tel" name="number" pattern= "^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required />
      </div>
      <button type="submit">Add contact</button>
    </form>
  )
  
};

ContactForm.propTypes = {
  saveContact: PropTypes.func.isRequired,
} 