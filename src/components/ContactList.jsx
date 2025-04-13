import React from 'react'
import usePhoneBookStore from '../stores/usePhoneBookStore'

const ContactList = () => {

  const {phoneBook} = usePhoneBookStore(); 
  console.log(phoneBook); 
  return (
    <>
        {phoneBook.map((item) => (<div>{item.name}, {item.phone}</div>))}
    </>
  )
}

export default ContactList