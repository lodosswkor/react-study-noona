import './App.css'
import { Box, Paper } from '@mui/material'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  

  /*
    1. 연락처 등록 
    2. 연락처 검색
    3. 연락처 삭제
  */
  return (
    <Box sx={{ 
      display: 'flex', 
      height: '100vh', 
      bgcolor: '#f5f5f7', 
      overflow: 'hidden',
      p: 2
    }}>
      <Paper 
        elevation={3} 
        sx={{ 
          display: 'flex', 
          borderRadius: 4, 
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        <Box 
          sx={{ 
            width: 350, 
            bgcolor: '#f9f9f9', 
            borderRight: '1px solid #e0e0e0',
            p: 3,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h2 style={{ 
            marginBottom: '32px', 
            fontWeight: 600, 
            color: '#1976d2' 
          }}>
            새 연락처 추가
          </h2>
          <ContactForm />
        </Box>
        
        <Box 
          sx={{ 
            flexGrow: 1, 
            p: 3,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h1 style={{ 
            marginBottom: '32px', 
            fontWeight: 600 
          }}>
            연락처
          </h1>
          <ContactList />
        </Box>
      </Paper>
    </Box>
  )
}



export default App
