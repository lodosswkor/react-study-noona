import React from 'react'
import { TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';
import { useState } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
//-- name, phone
const ContactForm = () => {

  const [name, setName] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const {addContact} = usePhoneBookStore(); 

  const register = (e) => {
    e.preventDefault(); 
    console.log(`name : ${name}, phone : ${phone}`);
    handleAddContract();
  };

  const handleAddContract = () => {
    if(!name.trim() || !phone.trim()) return;
    addContact(name, phone); 
  };

  return (
    <form onSubmit={(e) => {register(e)}}>
        <Box display="flex" flexDirection={'column'} alignItems={'center'} gap={2}>
            <TextField id="name" label="이름" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField id="phone" label="전화번호" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <Button variant="outlined" size='large' type='submit'>추가</Button>
        </Box>
    </form>
  )
}

export default ContactForm