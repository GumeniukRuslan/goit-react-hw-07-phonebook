import { ContactForm } from "./ContactFrom/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";

import { useEffect } from "react";
import { addContactsThunk, delContactsThunk, getContactsThunk } from "redux/thunk";

export const App = () => {  
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const contacts = useSelector(state => state.contacts.items)

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])

  const saveContact = (contact) => {
    if (contacts.find(obj => obj.name.toLowerCase() === contact.name.toLowerCase())) {
      const notify = () => toast.error('Contact is already in list.');
      return notify()
    }
    dispatch(addContactsThunk(contact))
  };

  const removeContact = (evt) => dispatch(delContactsThunk(evt.target.closest('li').id));

  const filterContacts = (evt) => dispatch(setFilter(evt.target.value.trim()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm saveContact={saveContact} />

      {contacts.length
        ? <><h2>Contacts</h2>
            <Filter filterValue={filterContacts} />
            <ContactList deleteContact={removeContact} contacts={contacts.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()))} />
          </>
        : <p>Add some contacts</p>}
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </div>
  );
};
