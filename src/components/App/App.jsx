import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";
function App() {
  const initContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  let [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initContacts;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // const [reviews, setReviews] = useState(() => {
  //   const savedReviews = localStorage.getItem("reviews");
  //   return savedReviews
  //     ? JSON.parse(savedReviews)
  //     : {
  //         good: 0,
  //         neutral: 0,
  //         bad: 0,
  //       };
  // });

  // useEffect(() => {
  //   localStorage.setItem("reviews", JSON.stringify(reviews));
  // }, [reviews]);

  const AddContact = (newContact) => {
    // Use spread operator to create a new array
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteTask = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contat) => contat.id !== contactId);
    });
  };
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapperApp}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={AddContact} />
        <SearchBox value={filter} setValue={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
