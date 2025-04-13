import React from 'react'
import { TextField, Button, Paper, Avatar } from '@mui/material'
import Box from '@mui/material/Box';
import { useState, useRef } from 'react';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonIcon from '@mui/icons-material/Person';

const ContactForm = () => {

  const inputRef = useRef(); 

  const [name, setName] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const {addContact} = usePhoneBookStore(); 

  
  const register = (e) => {
    e.preventDefault(); 
    console.log(`name : ${name}, phone : ${phone}`);
    handleAddContract();
  };

  const handleAddContract = () => {
    if(!name.trim() || !phone.trim()) {
      alert('이름과 전화번호를 입력해 주세요.');
      return;
    }
    addContact(name, phone); 
    setName('');
    setPhone('');
    inputRef.current.focus();
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        borderRadius: 3, 
        bgcolor: 'white',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >

    <form onSubmit={(e) => {register(e)}} style={{ width: '100%' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <Avatar 
          sx={{ 
            width: 100, 
            height: 100, 
            bgcolor: '#e1f5fe', 
            color: '#0288d1',
            mb: 2
          }}
        >
          <PersonIcon sx={{ fontSize: 50 }} />
        </Avatar>
      </Box>
      
        <Box display="flex" flexDirection={'column'} gap={2}>
            <TextField 
              id="name" 
              label="이름" 
              variant="outlined" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              fullWidth
              inputRef={inputRef}
              autoFocus
            />
            
            <TextField 
              id="phone" 
              label="전화번호" 
              variant="outlined" 
              type='tel'
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
            />
            
            <Button 
              variant="contained" 
              size='large' 
              type='submit'
            >
              연락처 추가
            </Button>
        </Box>
      </form>
    </Paper>
  )
}

export default ContactForm