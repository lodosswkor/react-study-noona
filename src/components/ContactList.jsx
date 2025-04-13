import React, { useEffect, useState } from 'react'
import usePhoneBookStore from '../stores/usePhoneBookStore'
import { 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  Box, 
  Paper,
  InputBase,
  IconButton
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactList = () => {


  const {phoneBook, removeContact} = usePhoneBookStore(); 
  const [phoneBookLocal, setPhoneBookLocal] = useState([]); 
  const [searchText, setSearchText] = useState('');

  
  //-- 첫 로딩시 + phoneBook 변경시마다 동작
  useEffect(()=>{
    setPhoneBookLocal([...phoneBook]);
    if(searchText !== '') searchContact(); // 검색 상태에서 삭제할 경우 실행
  }, [phoneBook]);

  const handleSearchContact = (e) => {
    if(e.keyCode !== 13) return; 
    searchContact();
  };

  const searchContact = () => {
    setPhoneBookLocal([...phoneBook].filter((item) => item.name.indexOf(searchText.trim()) >= 0));
  }

  const handleDelete = (id) => {
    if(!confirm('삭제하시겠습니까?')) return;
    removeContact(id);
  }

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Paper
          sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%',
            borderRadius: 2,
            mb: 3,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
          }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchContact}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="연락처 검색"
            onChange={(e) => { setSearchText(e.target.value) }}
            onKeyDown={(e) => { handleSearchContact(e)}}
          />
        </Paper>
        
        <Paper
          elevation={0}
          sx={{ 
            flexGrow: 1, 
            overflow: 'auto',
            borderRadius: 3,
            bgcolor: 'white'
          }}
        >
          {phoneBookLocal.length === 0 ? (
            <Box sx={{ 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              p: 3,
              color: 'text.secondary'
            }}>
              <PersonIcon sx={{ fontSize: 60, color: '#e0e0e0', mb: 2 }} />
              <p style={{ margin: 0 }}>
                등록된 연락처가 없습니다.
              </p>
            </Box>
          ) : (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {phoneBookLocal.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem alignItems="flex-start" sx={{ px: 3, py: 2 }} style={{'border-bottom':'solid 1px lightgray'}}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: '#e8f5e9', color: '#2e7d32' }}>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={<span style={{ fontWeight: 500 }}>{item.name}</span>}
                      secondary={
                          <>
                          <PhoneIcon fontSize="small" sx={{ mr: 1, fontSize: 16, color: 'text.secondary' }} />
                          <span style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                            {item.phone}
                          </span>
                          </>
                      }
                    />
                    <ListItemAvatar style={{'cursor':'pointer'}} onClick={() => handleDelete(item.id)}>
                      <Avatar>
                        <DeleteForeverIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          )}
        </Paper>
      </Box>
  )
}

export default ContactList